<template>
  <AQuark
    tagName="select"
    class="dropdown"
    v-bind="mapAttrs($props)"
    @change.prevent="(event) => $emit('update:model-value', event.target.value)"
  >
    <option value="">{{ placeholder ?? "Choose option" }}</option>
    <option
      v-for="(option, index) in options"
      :key="`dropdown.option.${index}`"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </AQuark>
</template>

<script setup lang="ts">
import { mapAttrs } from "@/atoms/Quark";
import AQuark from "@/atoms/Quark/AQuark.vue";

import { DropdownProps } from "@/atoms/Dropdown/types.js";

defineProps<DropdownProps>();
</script>

<style scoped lang="scss">
.dropdown {
  max-width: 100%;

  outline: none;

  padding: 10px 15px;

  cursor: pointer;
}
</style>
