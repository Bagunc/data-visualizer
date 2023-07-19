<template>
  <div class="data-table" v-bind="containerProps">
    <div v-bind="wrapperProps">
      <table class="table">
        <thead class="table__header">
          <tr>
            <th
              v-for="(header, index) in headers"
              :key="`table.header.${index}`"
              :style="header.style ?? {}"
            >
              <slot :name="`header:${header.name}`" :item="header">{{
                header.label
              }}</slot>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="{ data, index } in list"
            :key="`table.row.${index}`"
            class="table__row"
          >
            <td
              v-for="(header, index) in headers"
              :key="`table.header.${index}`"
            >
              <slot :name="`column:${header.name}`" :item="data[header.name]">{{
                data[header.name]
              }}</slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts" generic="ValueType">
import { shallowRef } from "vue";
import { useVirtualList } from "@vueuse/core";

import { TableProps } from "@/atoms/Table/types.js";

const props = defineProps<TableProps<ValueType>>();
const tableData = shallowRef(props.data ?? []);

const { list, containerProps, wrapperProps } = useVirtualList(tableData, {
  overscan: 5,
  itemHeight: 30,
});
</script>

<style lang="scss">
.data-table {
  overflow: auto;

  max-width: 100%;
  max-height: 100%;

  .table {
    width: 100%;

    border-spacing: 0;

    &__header {
      top: 0;
      left: 0;
      z-index: 2;
      position: sticky;

      background-color: $color-primary;

      color: white;
    }

    td,
    th {
      height: 40px;
      padding: 0 20px;

      text-align: initial;

      width: max-content;
      white-space: nowrap;
    }
  }
}
</style>
