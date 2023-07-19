<template>
  <div class="coins-chart">
    <CoinMarketChartFields v-model="query" />
    <AQuark v-if="loading" info large class="chart__placeholder" tagName="div"
      >Please choose option in the top for showing chart</AQuark
    >
    <LineChart v-else heading="Coins chart" v-model="chartData" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, shallowRef } from "vue";
import { storeToRefs } from "pinia";

import { useCoinsStore } from "@/store/CoinsStore/CoinsStore.js";

import AQuark from "@/atoms/Quark/AQuark.vue";
import LineChart from "@/atoms/Chart/LineChart.vue";
import { LineChartValue } from "@/atoms/Chart/types.js";
import CoinMarketChartFields from "@/organisms/CoinsMarketChart/CoinMarketChartFields.vue";

import { ConstCoinsMarketChartDataMapper } from "@/organisms/CoinsMarketChart/consts.js";
import { useCoinsEndpoint } from "@/app/providers/coingecko/endpoints/list/coins/index.js";
import { CoingeckoCoinsMarketChart } from "@/app/providers/coingecko/endpoints/list/coins/types.js";

const coinsStore = useCoinsStore();
const { query } = storeToRefs(coinsStore);

const cGeckoCoins = useCoinsEndpoint();

const loading = ref(true);
const chartData = shallowRef<Array<LineChartValue<CoingeckoCoinsMarketChart>>>(
  [],
);

watch(
  query,
  (value) => {
    if (!value.id || !value.vs_currency || !value.days) {
      return;
    }

    loading.value = true;
    cGeckoCoins.marketChart({ ...value }).then(({ data }) => {
      chartData.value = [];
      Object.entries(data).forEach(([key, value]) => {
        chartData.value.push({
          label: key,
          value,
          ...(ConstCoinsMarketChartDataMapper[key] ?? {}),
        });
      });

      loading.value = false;
    });
  },
  {
    deep: true,
  },
);
</script>

<style scoped lang="scss">
.chart__placeholder {
  text-align: center;

  padding: 40px 0;
}
</style>
