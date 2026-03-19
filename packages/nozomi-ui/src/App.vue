<script setup lang="ts">
import SystemBar from "./components/layout/SystemBar.vue";

// Empty main entry
</script>

<template>
  <VApp>
    <SystemBar />

    <VMain>
      <RouterView class="fill-height">
        <template #default="{ Component }">
          <VSlideYReverseTransition leave-absolute>
            <component :is="Component" />
          </VSlideYReverseTransition>
        </template>
      </RouterView>
    </VMain>
  </VApp>
</template>
