import {
  CoingeckoEndpointResponse,
  CoingeckoPrecision,
} from "@/app/providers/coingecko/endpoints/types.ts";

export interface CoingeckoSimplePriceParams {
  ids: string;
  vs_currencies: string;

  include_24hr_vol?: boolean;
  include_market_cap?: boolean;
  include_24hr_change?: boolean;
  precision?: CoingeckoPrecision;
  include_last_updated_at?: boolean;
}

export type CoingeckoSimplePrice =
  | {
      [key: string]: {
        [key: string]: number | undefined;
      };
    }
  | {};

export interface CoingeckoSimpleTokenPriceParams extends CoingeckoSimplePrice {
  contract_addresses: string;
}

export type CoingeckoSimpleSupportedVsCurrencies = Array<string>;

export interface CoingeckoSimpleEndpoint {
  price: CoingeckoEndpointResponse<
    CoingeckoSimplePriceParams,
    CoingeckoSimplePrice
  >;
  tokenPrice: CoingeckoEndpointResponse<CoingeckoSimpleTokenPriceParams>;
  supportedVsCurrencies: CoingeckoEndpointResponse<
    undefined,
    CoingeckoSimpleSupportedVsCurrencies
  >;
}
