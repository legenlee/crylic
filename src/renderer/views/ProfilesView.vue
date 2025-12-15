<script setup lang="ts">
import CreateProfileDialog from "../dialogs/CreateProfileDialog.vue";

const profiles = [
  {
    name: "Test Profile",
    version: "1.21.10",
    modPlatform: "Fabric",
  },
  {
    name: "Test Profile",
    version: "1.16.5",
    modPlatform: "Forge",
  },
  {
    name: "Test Profile",
    version: "1.21.10",
  },
  {
    name: "Test Profile",
    version: "1.21.1",
    modPlatform: "Fabric",
  },
  {
    name: "Test Profile",
    version: "1.21.9",
    modPlatform: "Fabric",
  },
  {
    name: "Test Profile",
    version: "1.21.10",
  },
  {
    name: "Test Profile",
    version: "1.21.1",
    modPlatform: "NeoForge",
  },
  {
    name: "Test Profile",
    version: "1.21.10",
    modPlatform: "Quilt",
  },
  {
    name: "Test Profile",
    version: "1.20.4",
    modPlatform: "Fabric",
  },
  {
    name: "Test Profile",
    version: "1.21.1",
    modPlatform: "Forge",
  },
];
</script>

<template>
  <VContainer>
    <div class="mb-4 d-flex align-start ga-2">
      <VTextField
        flat
        variant="solo-filled"
        label="Profile Name"
        prepend-inner-icon="mdi-magnify"
        rounded="xl"
        max-width="400"
        hide-details
        density="comfortable"
      />

      <VSelect
        flat
        variant="solo-filled"
        label="Sort by:"
        rounded="xl"
        max-width="200"
        density="comfortable"
        hide-details
        :items="['Name', 'Last Played']"
      />
    </div>

    <VRow>
      <VCol v-for="(profile, index) in profiles" :key="index" md="4" lg="3">
        <VCard variant="tonal" rounded="xl">
          <div class="d-flex">
            <div class="align-self-center">
              <VAvatar border class="my-4 ml-4" rounded="lg" size="48">
                <VImg></VImg>
              </VAvatar>
            </div>

            <div class="flex-fill">
              <VCardItem>
                <VCardTitle>
                  <span>{{ profile.name }}</span>
                </VCardTitle>
                <VCardSubtitle v-if="profile.modPlatform">
                  {{ profile.version }} ({{ profile.modPlatform }})
                </VCardSubtitle>
                <VCardSubtitle v-else>{{ profile.version }}</VCardSubtitle>
              </VCardItem>
            </div>
          </div>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>

  <CreateProfileDialog>
    <template #default="{ props }">
      <VFab
        v-bind="props"
        prepend-icon="mdi-plus"
        text="Create new Profile"
        app
      />
    </template>
  </CreateProfileDialog>
</template>
