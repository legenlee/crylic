<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useDate } from 'vuetify';

const { params } = useRoute();
const date = useDate();

const formattedNow = date.format(new Date(), 'fullDateTime');
</script>

<template>
  <VContainer class="pt-8" fluid>
    <div>
      <h1>{{ params.id }}</h1>
      <VChip rounded variant="tonal">1.20.1</VChip>
    </div>
    <div class="mt-4 d-flex align-center ga-4">
      <VBtn variant="elevated" size="x-large" prepend-icon="mdi-launch" text="Launch"></VBtn>
      <VDivider vertical />
      <div class="d-flex align-center ga-4 text-medium-emphasis">
        <VIcon icon="mdi-update" />
        <div>
          <div>Last launched:</div>
          <div>{{ formattedNow }}</div>
        </div>
      </div>
      <VDivider vertical />
      <div class="d-flex align-center ga-4 text-medium-emphasis">
        <VIcon icon="mdi-update" />
        <div>
          <div>Total playtime:</div>
          <div>0 hour(s)</div>
        </div>
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
      <VCol cols="4">
        <VCard title="Worlds" subtitle="0 world(s) created" color="primary" variant="tonal">
          <VCardActions>
            <VSpacer />
            <VBtn text="Manage" />
          </VCardActions>
        </VCard>
      </VCol>

      <VCol cols="4">
        <VCard title="Resource Packs" subtitle="0 resource pack(s) installed" color="primary" variant="tonal">
          <VCardActions>
            <VSpacer />
            <VBtn text="Manage" />
          </VCardActions>
        </VCard>
      </VCol>

      <VCol cols="4">
        <VCard title="Screenshots" subtitle="0 screenshot(s) captured" color="primary" variant="tonal">
          <VCardActions>
            <VSpacer />
            <VBtn text="Manage" />
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>