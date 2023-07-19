<template>
  <ADropdown
    primary
    outlined
    :options="options"
    placeholder="Choose Days"
    @update:model-value="(value) => $emit('update:model-value', value)"
  />
</template>
<script setup lang="ts">
import ADropdown from "@/atoms/Dropdown/ADropdown.vue";

defineProps<{ modelValue?: string | number }>();

const options = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 14,
    label: "14",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 90,
    label: "90",
  },
  {
    value: 180,
    label: "180",
  },
  {
    value: 360,
    label: "360",
  },
  {
    label: "Max",
    value: "max",
  },
];
</script>
