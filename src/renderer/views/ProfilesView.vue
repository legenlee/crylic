<script setup lang="ts">
import { shallowRef } from "vue";

const rules = {
  empty: (value: unknown) => {
    if (!value) {
      return "This field cannot be empty.";
    }

    if (typeof value === "string" && value.length === 0) {
      return "This field cannot be empty.";
    }

    return true;
  },
  integer: (value: string) => {
    const pattern = /^\d+$/;

    if (!pattern.test(value)) {
      return "Value must be a integer number.";
    }

    return true;
  },
  notSameOrUnderMinMemory: (value: string) => {
    if (parseInt(value) <= minMemory.value) {
      return "Maximum Memory cannot be same or under the Minimum Memory.";
    }

    return true;
  },
  notSameOrUpperMaxMemory: (value: string) => {
    if (parseInt(value) >= maxMemory.value) {
      return "Minimum Memory cannot be same or under the Maximum Memory.";
    }

    return true;
  },
};

const minMemory = shallowRef(2);
const maxMemory = shallowRef(4);
</script>

<template>
  <div class="d-flex align-center justify-center">
    <VSheet class="px-6 py-4" rounded="xl">
      <div>No profiles found. Would you like to create your first profile?</div>
    </VSheet>

    <VDialog scrollable width="70%" height="70%">
      <template #activator="{ props }">
        <VFab app v-bind="props" prepend-icon="mdi-plus" size="large">
          Create
        </VFab>
      </template>

      <template #default="{ isActive }">
        <VCard>
          <VCardTitle>Create Profile</VCardTitle>
          <VCardText>
            <VDivider>
              <span class="text-subtitle-2 text-medium-emphasis">General</span>
            </VDivider>

            <div class="py-4">
              <VRow>
                <VCol cols="6">
                  <VTextField
                    hide-details="auto"
                    label="Name"
                    variant="filled"
                    :rules="[rules.empty]"
                  />
                </VCol>

                <VCol cols="3">
                  <VTextField
                    v-model="minMemory"
                    hide-details="auto"
                    label="Minimum Menory"
                    variant="filled"
                    suffix="GB"
                    :rules="[
                      rules.empty,
                      rules.integer,
                      rules.notSameOrUpperMaxMemory,
                    ]"
                  />
                </VCol>

                <VCol cols="3">
                  <VTextField
                    v-model="maxMemory"
                    hide-details="auto"
                    label="Maximum Memory"
                    variant="filled"
                    suffix="GB"
                    :rules="[
                      rules.empty,
                      rules.integer,
                      rules.notSameOrUnderMinMemory,
                    ]"
                  />
                </VCol>
              </VRow>

              <VRow>
                <VCol cols="12">
                  <VSelect hide-details label="Version" variant="filled">
                    <template #append>
                      <VBtn
                        class="text-none"
                        variant="tonal"
                        prepend-icon="mdi-refresh"
                      >
                        Refresh
                      </VBtn>
                    </template>
                  </VSelect>
                </VCol>
              </VRow>

              <VRow>
                <VCol cols="12">
                  <VTextField
                    persistent-hint
                    label="Profile Location"
                    variant="filled"
                    hint="If empty, Profile uses default Profile Location."
                  >
                    <template #append-inner>
                      <VBtn size="small" variant="tonal">Browse</VBtn>
                    </template>
                  </VTextField>
                </VCol>
              </VRow>

              <VRow>
                <VCol cols="12">
                  <VTextField
                    persistent-hint
                    hide-details="auto"
                    label="Java Location"
                    variant="filled"
                    hint="If empty, Profile uses default Java Location."
                  >
                    <template #append-inner>
                      <VBtn size="small" variant="tonal">Browse</VBtn>
                    </template>
                  </VTextField>
                </VCol>
              </VRow>
            </div>

            <VDivider>
              <span class="text-subtitle-2 text-medium-emphasis">Advanced</span>
            </VDivider>

            <div class="py-4">
              <VAlert
                closable
                border="start"
                color="warning"
                icon="mdi-alert-circle-outline"
                variant="outlined"
              >
                <template #close="{ props }">
                  <!-- Remove color utility class to inherit color of the alert component. -->
                  <VBtn v-bind="props" color="" />
                </template>

                <VAlertTitle>Sensitive Warning</VAlertTitle>
                This area contains sensitive fields that could damage the game
                or your system. <strong>DO NOT</strong> modify these settings
                unless you fully understand their functions.
              </VAlert>

              <VRow class="mt-4">
                <VCol cols="12">
                  <VTextField
                    persistent-hint
                    hide-details="auto"
                    label="JVM Argument"
                    variant="filled"
                    hint="If not empty, Profile ignores Memory allocations above."
                  />
                </VCol>
              </VRow>
            </div>
          </VCardText>

          <VCardActions>
            <VSpacer />
            <VBtn @click="isActive.value = false">Cancel</VBtn>
            <VBtn variant="elevated" prepend-icon="mdi-plus">Create</VBtn>
          </VCardActions>
        </VCard>
      </template>
    </VDialog>
  </div>
</template>
