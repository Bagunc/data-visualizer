import { HTMLAttributes } from "vue";

import { keys } from "@/atoms/Quark/consts.ts";
import { QuarkClsx, QuarkProps } from "@/atoms/Quark/types.ts";

export function mapClsx(props: QuarkProps): QuarkClsx {
  return keys.reduce((value: QuarkClsx, prop: keyof QuarkProps): QuarkClsx => {
    value[prop] = !!props[prop];
    return value;
  }, {});
}

export function mapAttrs(props: QuarkProps): HTMLAttributes {
  return {
    class: mapClsx(props),
  };
}
