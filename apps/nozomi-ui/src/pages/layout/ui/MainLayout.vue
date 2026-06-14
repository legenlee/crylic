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
      <VList>
        <VListItem title="LegenLee" subtitle="Microsoft (Active)">
          <template #prepend>
            <VAvatar color="grey" />
          </template>
        </VListItem>
      </VList>

      <VDivider />

      <VList nav>
        <VListItem></VListItem>
      </VList>

      <template #append>
        <VList nav>
          <VListItem prepend-icon="mdi-cog" link title="Settings"></VListItem>
        </VList>
      </template>
    </VNavigationDrawer>

    <VMain>
      <RouterView />
    </VMain>
  </VLayout>
</template>
