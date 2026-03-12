<script setup lang="ts">
import { RouteNames } from "../plugins/router";
</script>

<template>
  <VNavigationDrawer
    rail
    expand-on-hover
    permanent
  >
    <VList
      color="primary"
      nav
    >
      <VListItem
        density="compact"
        prepend-icon="mdi-bookshelf"
        title="Library"
        :to="{ name: RouteNames.Home }"
        exact
      />
      <VListItem
        density="compact"
        prepend-icon="mdi-bookshelf"
        title="Library"
        :to="{ name: RouteNames.Detail, params: { id: 10 } }"
        exact
      />
    </VList>

    <template #append>
      <VList
        color="primary"
        nav
      >
        <VListItem
          density="compact"
          prepend-icon="mdi-cog"
          title="Settings"
          to=""
          exact
        />
      </VList>
    </template>
  </VNavigationDrawer>

  <VMain scrollable>
    <VContainer fluid>
      <RouterView v-slot="{ Component }">
        <VSlideXReverseTransition hide-on-leave>
          <component :is="Component" />
        </VSlideXReverseTransition>
      </RouterView>
    </VContainer>
  </VMain>
</template>
