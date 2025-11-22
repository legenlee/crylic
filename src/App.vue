<script setup lang="ts">
console.log("👋 This message is being logged by \"App.vue\", included via Vite");
</script>

<template>
  <VApp>
    <VNavigationDrawer permanent>
      <VList>
        <VListItem link to="/">
          <VListItemTitle>Home</VListItemTitle>
        </VListItem>

        <VListItem link to="/about">
          <VListItemTitle>About</VListItemTitle>
        </VListItem>
      </VList>
    </VNavigationDrawer>

    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>