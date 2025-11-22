<script setup lang="ts">
import { ROUTE_NAMES } from './routes';
</script>

<template>
  <VApp>
    <VNavigationDrawer permanent>
      <VList>
        <VListItem :to="{ name: ROUTE_NAMES.HOME }">
          <VListItemTitle>Home</VListItemTitle>
        </VListItem>
        <VListItem :to="{ name: ROUTE_NAMES.ABOUT }">
          <VListItemTitle>About</VListItemTitle>
        </VListItem>
      </VList>
    </VNavigationDrawer>

    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>