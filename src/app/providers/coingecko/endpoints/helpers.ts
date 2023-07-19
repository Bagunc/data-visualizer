import { API_URI } from "@/app/providers/coingecko/consts.ts";

import {
  CoingeckoQueryRequest,
  CoingeckoQueryResponse,
} from "@/app/providers/coingecko/endpoints/types.ts";

export async function sendQuery<
  CoingeckoQueryParams extends CoingeckoQueryRequest,
  CoingeckoQueryResult extends object,
>(
  path: string,
  params?: CoingeckoQueryParams,
  cache: RequestCache = "force-cache",
): Promise<CoingeckoQueryResponse<CoingeckoQueryResult>> {
  path = makeQueryablePath<CoingeckoQueryParams>(path, params);
  const response: Response = await fetch(path, {
    cache,
  });
  const data: Promise<CoingeckoQueryResult> = await response.clone().json();

  return {
    data,
    response,
    status: response.status,
  };
}

export function makeQueryablePath<CoingeckoQueryParams>(
  path: string,
  params?: CoingeckoQueryParams,
): string {
  if (params) {
    for (const key in params) {
      const regexp = new RegExp(`{${key}}`, "gi");

      if (regexp.test(path)) {
        path = path.replace(regexp, params[key]);
        delete params[key];
      }
    }

    params = {
      ...(params._search || {}),
      ...(params || {}),
    };

    const searchQuery: string = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    path = `${path}?${searchQuery}`;
  }

  if (!path.startsWith(API_URI)) {
    if (path.charAt(0) === "/") {
      path = path.substring(1);
    }

    path = `${API_URI}/${path}`;
  }

  return path;
}
