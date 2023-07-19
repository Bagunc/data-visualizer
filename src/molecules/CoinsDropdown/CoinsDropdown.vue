<template>
  <ADropdown
    middle
    primary
    outlined
    modarate
    :options="options"
    placeholder="Choose coin"
    @update:model-value="(value) => $emit('update:model-value', value)"
  />
</template>

<script setup lang="ts">
import { shallowRef } from "vue";

import ADropdown from "@/atoms/Dropdown/ADropdown.vue";

import { useCoinsEndpoint } from "@/app/providers/coingecko/endpoints/list/coins/index.js";
import { CoingeckoCoinsList } from "@/app/providers/coingecko/endpoints/list/coins/types.ts";

defineProps<{ modelValue?: string }>();

const cGeckoCoins = useCoinsEndpoint();

const options = shallowRef<Array<CoingeckoCoinsList>>([]);

cGeckoCoins.list().then(({ data }) => {
  options.value = (data ?? []).map(({ id, name }) => ({
    value: id,
    label: name,
  }));
});
</script>

<style scoped></style>
