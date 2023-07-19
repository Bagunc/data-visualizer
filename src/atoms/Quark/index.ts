import { Component } from "vue";

import Quark from "./AQuark.vue";
import { QuarkProps } from "@/atoms/Quark/types.ts";

export * from "./helpers.ts";
export type {
  HasColor,
  HasSizes,
  QuarkClsx,
  HasTiming,
  QuarkProps,
  HasTransition,
} from "./types.ts";

export default Quark as Component<QuarkProps>;
