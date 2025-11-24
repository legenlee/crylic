<script setup lang="ts">
import GridList from '../components/GridList.vue';
import CreateProfileDialog from '../dialogs/CreateProfileDialog.vue';
import { RouteNames } from '../routes';

const dummys = [
  "Test 1",
  "Test 2",
  "Test 3",
  "Test 4",
  "Test 5",
  "Test 6",
  "Test 7",
  "Test 8",
  "Test 9",
  "Test 10",
  "Test 11",
  "Test 12",
];

</script>

<template>
  <VContainer min-height="100%" fluid>
    <GridList />
    <!-- <VRow>
      <VCol v-for="dummy in dummys" :key="dummy" cols="3">
        <VCard :to="{ name: RouteNames.PROFILE_DETAIL, params: { id: dummy } }" flat>
          <VCardItem>
            <VCardTitle>{{ dummy }}</VCardTitle>
            <VCardSubtitle>1.20.1</VCardSubtitle>
          </VCardItem>

          <VCardActions>
            <VSpacer />
            <VBtn icon="mdi-delete" size="small" @click.prevent />
            <VBtn variant="elevated" text="Launch" prepend-icon="mdi-launch" @click.prevent />
          </VCardActions>
        </VCard>
      </VCol>
    </VRow> -->


    <CreateProfileDialog>
      <template #default="{ props }">
        <VFab v-bind="props" prepend-icon="mdi-plus" text="Create new Profile" app />
      </template>
    </CreateProfileDialog>
  </VContainer>
</template>