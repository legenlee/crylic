<script setup lang="ts">
import SystemBar from "./components/layout/SystemBar.vue";

// Empty main entry
</script>

<template>
  <VApp>
    <SystemBar />

    <VMain>
      <RouterView>
        <template #default="{ Component }">
          <VSlideYReverseTransition leave-absolute>
            <component
              :is="Component"
              class="fill-height"
            />
          </VSlideYReverseTransition>
        </template>
      </RouterView>
    </VMain>
  </VApp>
</template>
