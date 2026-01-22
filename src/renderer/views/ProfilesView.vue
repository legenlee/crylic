<script setup lang="ts">
import CreateProfileDialog from "../dialogs/CreateProfileDialog.vue";
</script>

<template>
  <div class="d-flex flex-column flex-wrap align-center justify-center">
    <VSheet class="px-6 py-4" rounded="xl">
      <div>No profiles found. Would you like to create your first profile?</div>
    </VSheet>

    <CreateProfileDialog>
      <template #default="{ props }">
        <VFab
          app
          v-bind="props"
          prepend-icon="mdi-plus"
          size="large"
          rounded="lg"
        >
          Create
        </VFab>
      </template>
    </CreateProfileDialog>
  </div>
</template>
