<script setup lang="ts">
import ProfileItem from "../components/profile/ProfileItem.vue";
import { profiles } from "../constants/dummy";
</script>

<template>
  <VContainer
    class="fill-height"
    fluid
  >
    <VLayout class="fill-height">
      <VAppBar
        density="comfortable"
        rounded="lg"
      >
        <template #prepend>
          <VBtn
            class="ml-2 text-medium-emphasis"
            prepend-icon="mdi-magnify"
            rounded="lg"
            variant="flat"
          >
            <span>Search...</span>
          </VBtn>
        </template>
      </VAppBar>

      <VMain scrollable>
        <VRow class="mt-4">
          <VCol
            v-for="profile in profiles"
            :key="profile.id"
            cols="4"
          >
            <ProfileItem
              :name="profile.name"
              :profile-id="profile.id"
              :version="profile.version"
              :mod-platform="profile.modPlatform"
            />
          </VCol>
        </VRow>
      </VMain>

      <VFab
        absolute
        color="primary"
        icon="mdi-plus"
        rounded="xl"
        size="x-large"
      />
    </VLayout>
  </VContainer>
</template>
