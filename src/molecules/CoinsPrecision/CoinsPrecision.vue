<template>
  <ADropdown
    primary
    outlined
    :options="options"
    placeholder="Choose Precision"
  />
</template>
<script setup lang="ts">
import ADropdown from "@/atoms/Dropdown/ADropdown.vue";
import { betweenNumbersArray } from "@/utils/helpers.js";

defineProps<{ modelValue?: string | number }>();

const options = [
  {
    label: "Full",
    value: "full",
  },
  ...betweenNumbersArray(1, 18).map((value) => ({
    value,
    label: value.toString(),
  })),
];
</script>
