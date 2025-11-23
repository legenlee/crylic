<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useDate } from 'vuetify';

const { params } = useRoute();
const date = useDate();

const formattedNow = date.format(new Date(), 'fullDateTime');
</script>

<template>
  <VContainer fluid>
    <h1 class="text-h1">{{ params.id }}</h1>

    <VDivider class="my-4" />

    <div class="d-flex align-center ga-4">
      <VBtn variant="elevated" size="x-large" prepend-icon="mdi-launch" text="Launch"></VBtn>
      <VDivider vertical />
      <div class="text-medium-emphasis">
        <span>Last launched:</span>
        <div>{{ formattedNow }}</div>
      </div>
      <VDivider vertical />
      <div class="text-medium-emphasis">
        <span>Total playtime:</span>
        <div>0 hour(s)</div>
      </div>
      <VSpacer />

      <VMenu>
        <template #activator="{ props }">
          <VBtn icon="mdi-dots-vertical" v-bind="props" variant="text" color="medium-emphasis" />
        </template>

        <VList density="compact">
          <VListItem title="Open Profile Folder" prepend-icon="mdi-folder-open" link />
          <VListItem class="text-error" title="Delete Profile" prepend-icon="mdi-delete" link />
        </VList>
      </VMenu>

    </div>
    <VDivider class="my-4" />

    <VRow>
      <VCol cols="6">
        <VCard title="Overview" color="primary" variant="tonal"></VCard>
      </VCol>

      <VCol cols="6">
        <VCard title="Worlds" subtitle="0 world(s) created" color="primary" variant="tonal"></VCard>
      </VCol>

      <VCol cols="4">
        <VCard title="Resource Packs" subtitle="0 resource pack(s) installed" color="primary" variant="tonal"></VCard>
      </VCol>

      <VCol cols="4">
        <VCard title="Shader Packs" subtitle="0 shader pack(s) installed" color="primary" variant="tonal"></VCard>
      </VCol>

      <VCol cols="4">
        <VCard title="Mods" subtitle="0 mod(s) installed" color="primary" variant="tonal"></VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>