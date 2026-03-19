<script setup lang="ts">
import { shallowRef } from "vue";
import { NAVIGATION_DRAWER } from "../constants/navigation";
import { SETTINGS_ROUTE_NAMES } from "../constants/route";

const drawer = shallowRef(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<template>
  <VLayout>
    <VAppBar color="transparent">
      <template #prepend>
        <VBtn
          icon="mdi-menu"
          variant="plain"
          @click="toggleDrawer"
        />
      </template>

      <template #append>
        <VBtn
          icon="mdi-cog"
          :to="{
            name: SETTINGS_ROUTE_NAMES.settings,
          }"
          variant="plain"
        />
      </template>
    </VAppBar>

    <VNavigationDrawer
      border="0"
      color="transparent"
      :rail="drawer"
    >
      <VList
        color="primary"
        :items="NAVIGATION_DRAWER.default"
        nav
      />
    </VNavigationDrawer>

    <VMain scrollable>
      <RouterView v-slot="{ Component }">
        <VSlideXReverseTransition hide-on-leave>
          <component
            :is="Component"
            class="bg-surface rounded-t-xl"
          />
        </VSlideXReverseTransition>
      </RouterView>
    </VMain>
  </VLayout>
</template>
