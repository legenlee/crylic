<script setup lang="ts">
interface Props {
  cols?: number;
  list?: unknown[];
  emptyText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  cols: 4,
  list: () => [],
  emptyText: "Data is empty.",
});
</script>

<template>
  <template v-if="list.length > 0">
    <VRow>
      <VCol :cols="props.cols" v-for="item in props.list">
        <slot :item="item">{{ item.toString() }}</slot>
      </VCol>
    </VRow>
  </template>
  <template v-else>
    <slot name="empty">
      <span>{{ props.emptyText }}</span>
    </slot>
  </template>
</template>
