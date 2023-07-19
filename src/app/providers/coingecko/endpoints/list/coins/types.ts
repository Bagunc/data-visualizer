import {
  CoingeckoDay,
  CoingeckoOrder,
  CoingeckoLocale,
  CoingeckoInterval,
  CoingeckoPrecision,
  CoingeckoFrom1To250,
  CoingeckoEndpointResponse,
  CoingeckoPriceChangePercentage,
} from "@/app/providers/coingecko/endpoints/types.ts";

export interface CoingeckoCoinsListParams {
  include_platform?: boolean;
}

export interface CoingeckoCoinsList {
  id: string;
  name: string;
  symbol: string;
  platforms?: object;
}

export interface CoingeckoCoinsList {
  id: string;
  name: string;
  symbol: string;
  platforms?: object;
}

export interface CoingeckoCoinsMarketsParams {
  vs_currency: string;

  ids: string;
  page?: number;
  category?: string;
  sparkline?: boolean;
  locale?: CoingeckoLocale;
  per_page?: CoingeckoFrom1To250;
  precision?: CoingeckoPrecision;
  order?: CoingeckoOrder | Array<CoingeckoOrder>;
  price_change_percentage?:
    | CoingeckoPriceChangePercentage
    | Array<CoingeckoPriceChangePercentage>;
}

export interface CoingeckoCoinsMarkets {
  id: string;
  ath: number;
  atl: number;
  name: string;
  image: string;
  symbol: string;
  low_24h: number;
  ath_date: string;
  atl_date: string;
  high_24h: number;
  max_supply: number;
  roi: object | null;
  market_cap: number;
  total_volume: number;
  total_supply: number;
  last_updated: string;
  current_price: number;
  market_cap_rank: number;
  price_change_24h: number;
  circulating_supply: number;
  ath_change_percentage: number;
  atl_change_percentage: number;
  market_cap_change_24h: number;
  fully_diluted_valuation: number;
  price_change_percentage_24h: number;
  market_cap_change_percentage_24h: number;
}

export interface CoingeckoCoinsOHLCParams {
  id: string;
  days: CoingeckoDay;
  vs_currency: string;
  precision?: CoingeckoPrecision;
}

export type CoingeckoCoinsOHLC = Array<
  [time: number, open: number, high: number, low: number, close: number]
>;

export interface CoingeckoCoinsMarketChartParams {
  id: string;
  days: CoingeckoDay;
  vs_currency: string;

  interval?: CoingeckoInterval;
  precision?: CoingeckoPrecision;
}

export type CoingeckoCoinsMarketChart = {
  prices: Array<[time: number, value: number]>;
  market_caps: Array<[time: number, value: number]>;
  total_volumes: Array<[time: number, value: number]>;
};

export interface CoingeckoCoinsEndpoint {
  list: CoingeckoEndpointResponse<CoingeckoCoinsListParams, CoingeckoCoinsList>;
  ohlc: CoingeckoEndpointResponse<CoingeckoCoinsOHLCParams, CoingeckoCoinsOHLC>;
  marketChart: CoingeckoEndpointResponse<
    CoingeckoCoinsMarketChartParams,
    CoingeckoCoinsMarketChart
  >;
  markets: CoingeckoEndpointResponse<
    CoingeckoCoinsMarketsParams,
    CoingeckoCoinsMarkets
  >;
}
