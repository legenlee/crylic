<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div>
    <div class="title-area d-flex pb-4">
      <h1 class="text-display-medium mb-0 mt-auto">{{ route.params.id }}</h1>
    </div>

    <VDivider />

    <div class="d-flex align-center py-2 ga-2">
      <VBtn
        color="primary"
        prepend-icon="mdi-play"
        rounded="pill"
        size="x-large"
      >
        Launch
      </VBtn>

      <VListItem>
        <VListItemTitle>Last Played</VListItemTitle>
        <VListItemSubtitle>Never</VListItemSubtitle>
      </VListItem>

      <VListItem>
        <VListItemTitle>Total Playtime</VListItemTitle>
        <VListItemSubtitle>Never</VListItemSubtitle>
      </VListItem>

      <VSpacer />

      <VMenu>
        <VList>
          <VListItem
            title="Verify integrity of Files"
            prepend-icon="mdi-file-restore"
            @click="() => {}"
          />

          <VListItem
            title="Reveal in File Explorer"
            prepend-icon="mdi-folder"
            @click="() => {}"
          />

          <VListItem
            class="text-error"
            title="Delete Profile"
            prepend-icon="mdi-trash-can"
            @click="() => {}"
          />
        </VList>

        <template #activator="{ props }">
          <VBtn
            v-bind="props"
            icon="mdi-dots-vertical"
            variant="plain"
          />
        </template>
      </VMenu>
    </div>

    <VDivider />
  </div>
</template>

<style>
.title-area {
  height: 160px;
}
</style>
