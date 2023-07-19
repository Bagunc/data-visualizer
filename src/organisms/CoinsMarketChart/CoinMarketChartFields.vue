<template>
  <div class="coin-market__fields">
    <div>
      <SupportedVsCurrenciesDropdown v-model="query.vs_currency" />
      <AQuark error small tagName="b">Required *</AQuark>
    </div>
    <div>
      <CoinsDropdown v-model="query.id" />
      <AQuark error small tagName="b">Required *</AQuark>
    </div>
    <div>
      <CoinsDays v-model="query.days" />
      <AQuark error small tagName="b">Required *</AQuark>
    </div>
    <div>
      <CoinsPrecision v-model="query.precision" />
      <AQuark info small tagName="b">Optional *</AQuark>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useCoinsStore } from "@/store/CoinsStore/CoinsStore.js";

import AQuark from "@/atoms/Quark/AQuark.vue";
import CoinsDays from "@/molecules/CoinsDays/CoinsDays.vue";
import CoinsDropdown from "@/molecules/CoinsDropdown/CoinsDropdown.vue";
import CoinsPrecision from "@/molecules/CoinsPrecision/CoinsPrecision.vue";
import SupportedVsCurrenciesDropdown from "@/molecules/SupportedVsCurrenciesDropdown/SupportedVsCurrenciesDropdown.vue";

const coinsStore = useCoinsStore();

const { query } = storeToRefs(coinsStore);
</script>

<style scoped lang="scss">
.coin-market__fields {
  gap: 10px;
  display: flex;
  justify-content: center;

  padding: 10px 30px 0;

  & > * {
    flex: 0 0 200px;

    max-width: 200px;
  }

  .dropdown {
    width: 100%;
  }
}
</style>
