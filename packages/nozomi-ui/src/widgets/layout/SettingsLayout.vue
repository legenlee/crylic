<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <VLayout>
    <VAppBar
      color="transparent"
      density="comfortable"
      elevation="0"
    >
      <VAppBarTitle>Settings</VAppBarTitle>
      <template #prepend>
        <VBtn
          icon="mdi-arrow-left"
          @click="router.back()"
        />
      </template>
    </VAppBar>

    <VNavigationDrawer
      border="0"
      color="transparent"
    ></VNavigationDrawer>

    <VMain scrollable>
      <VContainer>
        <RouterView />
      </VContainer>
    </VMain>
  </VLayout>
</template>
