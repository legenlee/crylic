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
  <VLayout class="bg-surface">
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

        <VBtn
          icon="mdi-account-circle"
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
      <VContainer
        class="fill-height bg-background rounded-t-xl"
        fluid
      >
        <RouterView v-slot="{ Component }">
          <VSlideYReverseTransition hide-on-leave>
            <component :is="Component" />
          </VSlideYReverseTransition>
        </RouterView>
      </VContainer>
    </VMain>
  </VLayout>
</template>
