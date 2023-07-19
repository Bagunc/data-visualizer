<template>
  <ADropdown
    middle
    primary
    outlined
    modarate
    :options="options"
    placeholder="Choose currency"
    @update:model-value="(value) => $emit('update:model-value', value)"
  />
</template>

<script setup lang="ts">
import { shallowRef } from "vue";

import ADropdown from "@/atoms/Dropdown/ADropdown.vue";

import { useSimpleEndpoint } from "@/app/providers/coingecko/endpoints/list/simple/index.js";
import { CoingeckoSimpleSupportedVsCurrencies } from "@/app/providers/coingecko/endpoints/list/simple/types.ts";

defineProps<{ modelValue?: string }>();

const cGeckoSimple = useSimpleEndpoint();

const options = shallowRef<Array<CoingeckoSimpleSupportedVsCurrencies>>([]);

cGeckoSimple.supportedVsCurrencies().then(({ data }) => {
  options.value = (data ?? []).map((value) => ({
    value,
    label: value,
  }));
});
</script>

<style scoped></style>
