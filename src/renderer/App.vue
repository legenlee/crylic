<script setup lang="ts">
import { RouteNames } from './routes';
</script>

<template>
  <VApp>
    <VNavigationDrawer permanent>
      <VList>
        <VListItem :to="{ name: RouteNames.HOME }">
          <VListItemTitle>Home</VListItemTitle>
        </VListItem>
        <VListItem :to="{ name: RouteNames.ABOUT }">
          <VListItemTitle>About</VListItemTitle>
        </VListItem>
      </VList>
    </VNavigationDrawer>

    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>