<script setup lang="ts">
import { NAVIGATION_DRAWER } from "../constants/navigation";
</script>

<template>
  <VLayout>
    <VNavigationDrawer
      rail
      expand-on-hover
      permanent
    >
      <VList
        color="primary"
        :items="NAVIGATION_DRAWER.default"
        nav
      />

      <template #append>
        <VList
          color="primary"
          :items="NAVIGATION_DRAWER.append"
          nav
        />
      </template>
    </VNavigationDrawer>

    <VMain scrollable>
      <RouterView v-slot="{ Component }">
        <VSlideXReverseTransition hide-on-leave>
          <component :is="Component" />
        </VSlideXReverseTransition>
      </RouterView>
    </VMain>
  </VLayout>
</template>
