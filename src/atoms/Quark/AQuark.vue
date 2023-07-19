<template>
  <component :is="$props.tagName ?? 'div'" v-bind="mapAttrs($props)">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { mapAttrs } from "./helpers.ts";
import { QuarkPrivateProps } from "./types.ts";

defineProps<QuarkPrivateProps>();
</script>
