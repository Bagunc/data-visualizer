import {
  CoingeckoCoinsList,
  CoingeckoCoinsMarkets,
  CoingeckoCoinsEndpoint,
  CoingeckoCoinsListParams,
  CoingeckoCoinsMarketsParams,
  CoingeckoCoinsOHLCParams,
  CoingeckoCoinsOHLC,
  CoingeckoCoinsMarketChartParams,
  CoingeckoCoinsMarketChart,
} from "@/app/providers/coingecko/endpoints/list/coins/types.ts";

import { useQuery } from "@/app/providers/coingecko/endpoints/query.ts";
import { CoingeckoUseQueryResponse } from "@/app/providers/coingecko/endpoints/types.ts";

export const useCoinsEndpoint = (): CoingeckoCoinsEndpoint => {
  return {
    list: async (
      params: CoingeckoCoinsListParams,
    ): Promise<CoingeckoUseQueryResponse<CoingeckoCoinsList>> =>
      useQuery<CoingeckoCoinsListParams, CoingeckoCoinsList>(
        "coins/list",
        params,
      ),
    markets: async (
      params: CoingeckoCoinsMarketsParams,
    ): Promise<CoingeckoUseQueryResponse<CoingeckoCoinsMarkets>> =>
      useQuery<CoingeckoCoinsMarketsParams, CoingeckoCoinsMarkets>(
        "coins/markets",
        params,
      ),
    ohlc: async (
      params: CoingeckoCoinsOHLCParams,
    ): Promise<CoingeckoUseQueryResponse<CoingeckoCoinsOHLC>> =>
      useQuery<CoingeckoCoinsOHLCParams, CoingeckoCoinsOHLC>(
        "coins/{id}/ohlc",
        params,
      ),
    marketChart: async (
      params: CoingeckoCoinsMarketChartParams,
    ): Promise<CoingeckoUseQueryResponse<CoingeckoCoinsMarketChart>> =>
      useQuery<CoingeckoCoinsMarketChartParams, CoingeckoCoinsMarketChart>(
        "coins/{id}/market_chart",
        params,
      ),
  };
};
