<script setup lang="ts">
import { RouteNames } from "../plugins/router";
</script>

<template>
  <VNavigationDrawer>
    <VListItem
      title="Nozomi"
      subtitle="현재 개발 중"
    ></VListItem>
    <VDivider />
    <VList nav>
      <VListItem
        :to="{ name: RouteNames.Home }"
        title="Profiles"
        exact
      />
    </VList>
  </VNavigationDrawer>

  <VAppBar>
    <template #append>
      <VBtn icon>
        <VAvatar color="red"></VAvatar>
      </VBtn>
    </template>
  </VAppBar>

  <VMain>
    <RouterView></RouterView>
  </VMain>
</template>
