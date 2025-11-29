<script setup lang="ts">
import { ref } from "vue";
import { required } from "../utils/validation";

const currentTab = ref("manual");
const dialog = ref(false);
const createLoading = ref(false);

function create() {
  createLoading.value = true;

  setTimeout(function () {
    createLoading.value = false;
    dialog.value = false;
  }, 2000);
}
</script>

<template>
  <VDialog v-model="dialog" :persistent="createLoading">
    <template #activator="{ props }">
      <slot v-bind="{ props }" />
    </template>

    <VCard title="Create new Profile">
      <VCardText class="d-flex">
        <VRow>
          <VCol cols="6">
            <VTextField
              label="Name"
              density="compact"
              :rules="[required]"
              hide-details="auto"
            />
          </VCol>

          <VCol cols="6">
            <VSelect
              label="Version"
              density="compact"
              :rules="[required]"
              hide-details="auto"
            />
          </VCol>

          <VCol cols="12">
            <VTextField
              label="JVM Arguments"
              density="compact"
              persistent-hint
              hint="Do not edit this field if you have no idea what is this thing does."
            />
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardActions>
        <VSpacer />
        <VBtn :disabled="createLoading" @click="dialog = false"> Cancel </VBtn>
        <VBtn
          variant="elevated"
          prepend-icon="mdi-plus"
          :loading="createLoading"
          @click="create"
        >
          Create
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
