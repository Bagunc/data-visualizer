import { sendQuery } from "@/app/providers/coingecko/endpoints/helpers.ts";

import {
  CoingeckoQueryRequest,
  CoingeckoQueryResponse,
  CoingeckoUseQueryResponse,
} from "@/app/providers/coingecko/endpoints/types.ts";

export async function useQuery<
  CoingeckoQueryParams extends CoingeckoQueryRequest,
  CoingeckoQueryResult extends object,
>(
  path: string,
  params?: CoingeckoQueryRequest,
  cache: RequestCache = "force-cache",
): Promise<CoingeckoUseQueryResponse<CoingeckoQueryResult>> {
  let isError: boolean = false;
  let error: string | null = null;

  const result: CoingeckoQueryResponse<CoingeckoQueryResult> = await sendQuery<
    CoingeckoQueryParams,
    CoingeckoQueryResult
  >(path, params, cache);

  if ("error" in result.data) {
    isError = true;
    error = result.data.error;
  }

  return {
    error,
    isError,
    data: isError.value ? null : result?.data,
  };
}
