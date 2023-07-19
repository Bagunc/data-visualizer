import { CoingeckoEndpoint } from "@/app/providers/coingecko/endpoints/types.ts";

import { useCoinsEndpoint } from "@/app/providers/coingecko/endpoints/list/coins";
import { useSimpleEndpoint } from "@/app/providers/coingecko/endpoints/list/simple";

export const useEndpoints = (): CoingeckoEndpoint => {
  return {
    coins: useCoinsEndpoint(),
    simple: useSimpleEndpoint(),
  };
};
