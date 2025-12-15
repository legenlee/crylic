<script setup lang="ts">
import { ref } from "vue";
import { RouteNames } from "../routes";

const auth = ref(false);
</script>

<template>
  <VLayout max-height="100vh">
    <VNavigationDrawer permanent rail color="primary">
      <VList nav density="compact">
        <VListItem
          link
          :to="{ name: RouteNames.PROFILES }"
          prepend-icon="mdi-apps"
        />
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
              <VListItem title="Sign In" prepend-icon="mdi-login" link />
            </VList>
          </VMenu>
          <VListItem
            link
            :to="{ name: RouteNames.SETTINGS }"
            prepend-icon="mdi-cog"
          />
        </VList>
      </template>
    </VNavigationDrawer>

    <VMain class="overflow-y-auto">
      <slot />
    </VMain>
  </VLayout>
</template>
