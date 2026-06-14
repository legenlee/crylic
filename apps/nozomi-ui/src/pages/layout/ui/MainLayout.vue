<script setup lang="ts">
import {
  VAvatar,
  VDivider,
  VLayout,
  VList,
  VListItem,
  VMain,
  VNavigationDrawer,
} from "vuetify/components";
</script>

<template>
  <VLayout>
    <VNavigationDrawer>
      <template #prepend>
        <VList>
          <VListItem title="LegenLee" subtitle="Account Placeholder">
            <template #prepend>
              <VAvatar color="grey" />
            </template>
          </VListItem>
        </VList>
        <VDivider />

        <VList nav>
          <VListItem link prepend-icon="mdi-view-grid" title="Library" />
          <VListItem link prepend-icon="mdi-cog" title="Settings" />
        </VList>
        <VDivider />
      </template>

      <VList>
        <VListItem v-for="value in 30" :key="value">
          {{ value }}
        </VListItem>
      </VList>
    </VNavigationDrawer>

    <VMain>
      <RouterView />
    </VMain>
  </VLayout>
</template>
