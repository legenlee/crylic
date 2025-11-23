<script setup lang="ts">
import { ref } from 'vue';
import { RouteNames } from '../routes';

const auth = ref(false);
</script>

<template>
  <VNavigationDrawer permanent rail color="primary">
    <VList nav density="compact">
      <VListItem link :to="{ name: RouteNames.PROFILES }" prepend-icon="mdi-apps" />
    </VList>

    <template #append>
      <VList nav density="compact">
        <VMenu v-if="auth">
          <template #activator="{ props }">
            <VListItem v-bind="props" prepend-icon="mdi-account" />
          </template>

          <VList density="compact">
            <VListItem title="Sign out" prepend-icon="mdi-logout" />
          </VList>
        </VMenu>
        <VMenu v-else>
          <template #activator="{ props }">
            <VListItem v-bind="props" prepend-icon="mdi-account" />
          </template>

          <VList density="compact">
            <VListItem title="Sign In" prepend-icon="mdi-login" />
          </VList>
        </VMenu>
        <VListItem link prepend-icon="mdi-cog" />
      </VList>
    </template>
  </VNavigationDrawer>

  <!-- <VAppBar color="transparent" density="compact">
    <template #append>
      <VMenu v-if="auth">
        <template #activator="{ props }">
          <VBtn icon="mdi-account" v-bind="props" />
        </template>

        <VList density="compact">
          <VListItem title="Sign out" prepend-icon="mdi-logout" />
        </VList>
      </VMenu>
      <VMenu v-else>
        <template #activator="{ props }">
          <VBtn icon="mdi-account" v-bind="props" />
        </template>

        <VList density="compact">
          <VListItem title="Sign In with Microsoft account" prepend-icon="mdi-login" />
        </VList>
      </VMenu>
    </template>
  </VAppBar> -->

  <VMain>
    <slot />
  </VMain>
</template>