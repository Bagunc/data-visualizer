import { defineStore, StoreDefinition } from "pinia";
import { Ref, ref } from "vue";
import { CoingeckoCoinsMarketChartParams } from "@/app/providers/coingecko/endpoints/list/coins/types.js";

interface CoinsStore {
  query: Ref<CoingeckoCoinsMarketChartParams>;
}

export const useCoinsStore: StoreDefinition<CoinsStore> =
  defineStore<CoinsStore>("coins", (): CoinsStore => {
    const query: Ref<CoingeckoCoinsMarketChartParams> =
      ref<CoingeckoCoinsMarketChartParams>({
        id: undefined,
        days: undefined,
        interval: undefined,
        precision: undefined,
        vs_currency: undefined,
      });

    return {
      query,
    };
  });
