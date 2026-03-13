<script setup lang="ts">
// Empty main entry
</script>

<template>
  <VApp>
    <RouterView>
      <template #default="{ Component }">
        <VSlideYReverseTransition leave-absolute>
          <component :is="Component" />
        </VSlideYReverseTransition>
      </template>
    </RouterView>
  </VApp>
</template>
