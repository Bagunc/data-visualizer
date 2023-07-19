import {
  CoingeckoSimpleEndpoint,
  CoingeckoSimplePrice,
  CoingeckoSimplePriceParams,
  CoingeckoSimpleSupportedVsCurrencies,
} from "@/app/providers/coingecko/endpoints/list/simple/types.ts";
import { useQuery } from "@/app/providers/coingecko/endpoints/query.ts";
import { CoingeckoUseQueryResponse } from "@/app/providers/coingecko/endpoints/types.ts";

export const useSimpleEndpoint = (): CoingeckoSimpleEndpoint => {
  return {
    price: async (
      params: CoingeckoSimplePriceParams,
    ): Promise<CoingeckoUseQueryResponse<CoingeckoSimplePriceParams>> =>
      await useQuery<CoingeckoSimplePriceParams, CoingeckoSimplePrice>(
        "simple/price",
        params,
      ),
    supportedVsCurrencies: async (): Promise<
      CoingeckoUseQueryResponse<CoingeckoSimpleSupportedVsCurrencies>
    > =>
      useQuery<undefined, CoingeckoSimpleSupportedVsCurrencies>(
        "simple/supported_vs_currencies",
        undefined,
      ),
  };
};
