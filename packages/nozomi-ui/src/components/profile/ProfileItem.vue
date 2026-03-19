<script setup lang="ts">
import { computed } from "vue";
import { MAIN_ROUTE_NAMES } from "../../constants/route";

const props = defineProps<{
  profileId: string;
  name: string;
  version: string;
  modPlatform?: string;
}>();

const avatarText = computed(() => props.name.slice(0, 2));
const subtitleText = computed(
  () => `${props.version} ${props.modPlatform ?? "Vanilla"}`,
);
</script>

<template>
  <VCard
    class="d-flex"
    rounded="lg"
    :to="{
      name: MAIN_ROUTE_NAMES.detail,
      params: {
        id: props.profileId,
      },
    }"
  >
    <VAvatar
      color="primary"
      size="64"
      tile
    >
      {{ avatarText }}
    </VAvatar>

    <VListItem>
      <VListItemTitle>{{ props.name }}</VListItemTitle>
      <VListItemSubtitle>{{ subtitleText }}</VListItemSubtitle>
    </VListItem>

    <VBtn
      class="ml-auto my-auto mr-2"
      color="primary"
      elevation="0"
      icon="mdi-play"
      size="small"
      variant="tonal"
      @click.prevent
    />
  </VCard>
</template>
