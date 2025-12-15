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
    <VExpansionPanels multiple static>
      <VExpansionPanel title="Group 1">
        <VExpansionPanelText>
          <VRow>
            <VCol
              v-for="(profile, index) in profiles"
              :key="index"
              md="4"
              lg="3"
            >
              <VCard variant="tonal" color="primary">
                <div class="d-flex">
                  <div class="align-self-center">
                    <VAvatar
                      border
                      class="mt-4 mb-4 ml-4"
                      rounded="lg"
                      size="64"
                    >
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
                      <VCardSubtitle v-else>{{
                        profile.version
                      }}</VCardSubtitle>
                    </VCardItem>
                  </div>
                </div>
              </VCard>
            </VCol>
          </VRow>
        </VExpansionPanelText>
      </VExpansionPanel>

      <VExpansionPanel title="Group 2">
        <VExpansionPanelText>
          <VRow>
            <VCol
              v-for="(profile, index) in profiles"
              :key="index"
              md="4"
              lg="3"
            >
              <VCard variant="tonal" color="primary">
                <div class="d-flex">
                  <div class="align-self-center">
                    <VAvatar
                      border
                      class="mt-4 mb-4 ml-4"
                      rounded="lg"
                      size="64"
                    >
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
                      <VCardSubtitle v-else>{{
                        profile.version
                      }}</VCardSubtitle>
                    </VCardItem>
                  </div>
                </div>
              </VCard>
            </VCol>
          </VRow>
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>
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
