<template>
  <div class="chart">
    <div class="chart__header">
      <h2 class="primary">{{ heading }}</h2>
      <nav class="chart__labels">
        <ABtn
          middle
          outlined
          moderate
          secondary
          :key="index"
          :filled="show.has(index.toString())"
          v-for="({ label }, index) in modelValue"
          @click.prevent="toggle(index)"
        >
          <span>{{ label }}</span>
        </ABtn>
      </nav>
      <slot name="after-navigation"></slot>
    </div>
    <div ref="el" class="chart__el"></div>
  </div>
</template>

<script setup lang="ts" generic="DataType">
import { onMounted, ref, shallowRef } from "vue";

import { Root, Tooltip } from "@amcharts/amcharts5";
import {
  XYChart,
  DateAxis,
  XYCursor,
  ValueAxis,
  LineSeries,
  AxisRendererY,
  AxisRendererX,
  XYChartScrollbar,
} from "@amcharts/amcharts5/xy";
import { AnimatedTheme } from "@amcharts/amcharts5/.internal/themes/AnimatedTheme";
import ABtn from "@/atoms/Btn/ABtn.vue";
import { LineChartProps } from "@/atoms/Chart/types.js";

const props = withDefaults(defineProps<LineChartProps<DataType>>(), {
  heading: "Line Chart",
  modelValue: () => [],
});

const el = shallowRef<HTMLDivElement>();
const show = ref(new Set(Object.keys(props.modelValue)));

let root: Root;

const seriesList: Array<LineSeries> = [];

const toggle = (index: number) => {
  if (show.value.has(index.toString())) {
    show.value.delete(index.toString());
    seriesList[index].hide();
  } else {
    show.value.add(index.toString());
    seriesList[index].show();
  }
};

onMounted(() => {
  root = Root.new(el.value);

  root.setThemes([AnimatedTheme.new(root)]);

  const chart = root.container.children.push(
    XYChart.new(root, {
      panX: true,
      panY: true,
      wheelY: "zoomX",
      layout: root.verticalLayout,
      pinchZoomX: true,
    }),
  );

  const xAxis = chart.xAxes.push(
    DateAxis.new(root, {
      groupData: true,
      maxDeviation: 0.5,
      baseInterval: { timeUnit: "day", count: 1 },
      renderer: AxisRendererX.new(root, {
        minGridDistance: 50,
        pan: "zoom",
      }),
    }),
  );

  props.modelValue.forEach(({ label, colors, value }, index) => {
    const yAxis = chart.yAxes.push(
      ValueAxis.new(root, {
        maxDeviation: 1,
        renderer: AxisRendererY.new(root, { pan: "zoom", opposite: index }),
      }),
    );

    const series = chart.series.push(
      LineSeries.new(root, {
        name: label,
        xAxis: xAxis,
        yAxis: yAxis,
        color: "red",
        valueXField: "0",
        valueYField: "1",
        ...(colors ?? {}),
        tooltip: Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}",
        }),
      }),
    );

    series.strokes.template.set("strokeWidth", 2);
    series.fills.template.setAll({
      visible: true,
      fillOpacity: 0.4,
    });
    series.data.setAll(value);

    yAxis.set("tooltip", Tooltip.new(root, {}));

    seriesList.push(series);
  });

  chart.set(
    "cursor",
    XYCursor.new(root, {
      behavior: "none",
      xAxis: xAxis,
    }),
  );
  xAxis.set("tooltip", Tooltip.new(root, {}));

  const scrollbarX = XYChartScrollbar.new(root, {
    orientation: "horizontal",
    height: 50,
  });
  chart.set("scrollbarX", scrollbarX);

  const sbxAxis = scrollbarX.chart.xAxes.push(
    DateAxis.new(root, {
      baseInterval: { timeUnit: "day", count: 1 },
      renderer: AxisRendererX.new(root, {
        opposite: false,
        strokeOpacity: 0,
      }),
    }),
  );
  const sbyAxis = scrollbarX.chart.yAxes.push(
    ValueAxis.new(root, {
      renderer: AxisRendererY.new(root, {}),
    }),
  );

  props.modelValue.forEach(({ value }) => {
    const scrollbarXSeries = scrollbarX.chart.series.push(
      LineSeries.new(root, {
        xAxis: sbxAxis,
        yAxis: sbyAxis,
        valueYField: "1",
        valueXField: "0",
      }),
    );
    scrollbarXSeries.data.setAll(value);
  });
});
</script>

<style lang="scss" scoped>
.chart {
  &__header {
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 20px 0;
  }

  &__el {
    width: 100%;
    height: 500px;
  }

  &__labels {
    gap: 15px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
