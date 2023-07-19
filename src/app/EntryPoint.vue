<template>
  <div class="app">
    <div>
      <CoinsMarketChart />
    </div>
    <div>
      <CoinsOHLC />
    </div>
  </div>
</template>

<script setup lang="ts">
import CoinsOHLC from "@/organisms/CoinsMarkets/CoinsMarkets.vue";
import CoinsMarketChart from "@/organisms/CoinsMarketChart/CoinsMarketChart.vue";
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;

  height: 100vh;

  overflow: hidden;

  & > * {
    flex: 1;

    overflow: hidden;
  }
}
</style>
