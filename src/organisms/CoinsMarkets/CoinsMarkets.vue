<template>
  <AQuark class="info-text" warning mddle v-if="loading">Loading...</AQuark>
  <AQuark class="info-text" info large v-else-if="!query.vs_currency"
    >Please choose currency for loading table</AQuark
  >
  <ATable v-else :headers="headers" :data="tableData">
    <template #column:name="{ item }">
      {{ item }}
    </template>
  </ATable>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCoinsEndpoint } from "@/app/providers/coingecko/endpoints/list/coins/index.js";

import { useCoinsStore } from "@/store/CoinsStore/CoinsStore.js";

import ATable from "@/atoms/Table/ATable.vue";

import {
  CoingeckoCoinsOHLC,
  CoingeckoCoinsMarketChartParams,
} from "@/app/providers/coingecko/endpoints/list/coins/types.js";
import { ConstCoinsMarketsHeaders } from "@/organisms/CoinsMarkets/consts.js";
import AQuark from "@/atoms/Quark/AQuark.vue";

const coinsStore = useCoinsStore();
const cGeckoCoins = useCoinsEndpoint();

const headers = ConstCoinsMarketsHeaders;
const loading = ref(false);
const tableData = ref<Array<CoingeckoCoinsOHLC>>([{}]);

const { query } = storeToRefs(coinsStore);

watch(
  query,
  (value: CoingeckoCoinsMarketChartParams) => {
    if (!value.vs_currency) {
      return;
    }

    loading.value = true;

    cGeckoCoins
      .markets({
        vs_currency: value.vs_currency,
      })
      .then(({ data }) => {
        tableData.value = data;
      })
      .finally(() => {
        loading.value = false;
      });
  },
  {
    deep: true,
  },
);
</script>

<style scoped lang="scss">
.info-text {
  text-align: center;
}
</style>
