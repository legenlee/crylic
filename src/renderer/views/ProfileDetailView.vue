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
    </div>
    <VDivider class="my-4" />
  </VContainer>
</template>