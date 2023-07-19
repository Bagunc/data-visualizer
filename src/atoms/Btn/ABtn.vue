<template>
  <Quark tagName="button" v-bind="$props" class="btn">
    <slot name="prepend-icon"></slot>
    <span class="btn__text">
      <slot>{{ text }}</slot>
    </span>
    <slot name="append-icon"></slot>
  </Quark>
</template>

<script setup lang="ts">
import Quark from "@/atoms/Quark";

import { BtnProps } from "./types.ts";

defineProps<BtnProps>();
</script>

<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 15px;

  cursor: pointer;
}
</style>
