import { CoingeckoCoinsMarkets } from "@/app/providers/coingecko/endpoints/list/coins/types.js";
import { TableHeader } from "@/atoms/Table/types.js";

export type CoinsMarketsHeader = Array<TableHeader<CoingeckoCoinsMarkets>>;
