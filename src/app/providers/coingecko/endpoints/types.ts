import { CoingeckoSimpleEndpoint } from "@/app/providers/coingecko/endpoints/list/simple/types.ts";
import { CoingeckoCoinsEndpoint } from "@/app/providers/coingecko/endpoints/list/coins/types.ts";

export type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

export type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type CoingeckoFrom0To18 = IntRange<0, 18>;
export type CoingeckoFrom1To250 = IntRange<1, 250>;

export interface CoingeckoQueryResponse<CoingeckoResult> {
  status: number;
  response: Response;
  data: CoingeckoResult;
}

export interface CoingeckoQueryRequest {
  _search?: object;
}

export type CoingeckoEndpointResponse<
  CoingeckoEndpointParams extends undefined,
  CoingeckoEndpointResult,
> = (
  ...args: Array<CoingeckoEndpointParams>
) => Promise<CoingeckoUseQueryResponse<CoingeckoEndpointResult>>;

export type CoingeckoOrder =
  | "id_asc"
  | "id_desc"
  | "volume_asc"
  | "volume_desc"
  | "market_cap_asc"
  | "market_cap_desc";

export type CoingeckoPriceChangePercentage =
  | "1h"
  | "24h"
  | "7d"
  | "14d"
  | "30d"
  | "200d"
  | "1y ";

export type CoingeckoLocale =
  | "ar"
  | "bg"
  | "cs"
  | "da"
  | "de"
  | "el"
  | "en"
  | "es"
  | "fi"
  | "fr"
  | "he"
  | "hi"
  | "hr"
  | "hu"
  | "id"
  | "it"
  | "ja"
  | "ko"
  | "lt"
  | "nl"
  | "no"
  | "pl"
  | "pt"
  | "ro"
  | "ru"
  | "sk"
  | "sl"
  | "sv"
  | "th"
  | "tr"
  | "uk"
  | "vi"
  | "zh";

export type CoingeckoDay = 1 | 7 | 14 | 30 | 90 | 180 | 365 | "max";

export type CoingeckoInterval = "daly";

export type CoingeckoPrecision = "full" | CoingeckoFrom0To18;

export interface CoingeckoEndpoint {
  coins: CoingeckoCoinsEndpoint;
  simple: CoingeckoSimpleEndpoint;
}

export interface CoingeckoUseQueryResponse<CoingeckoUseQueryResult> {
  isError: boolean;
  error: string | null;
  data: CoingeckoUseQueryResult | null;
}
