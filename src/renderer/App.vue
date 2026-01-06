<script setup lang="ts">
import DefaultLayout from "./layouts/DefaultLayout.vue";
</script>

<template>
  <VApp>
    <VSystemBar window style="-webkit-app-region: drag">
      <span>Nozomi (In Development)</span>
      <VSpacer></VSpacer>
    </VSystemBar>

    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </VApp>
</template>
