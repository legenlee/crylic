<script setup lang="ts">
import { ref, shallowRef } from "vue";
import { commonRules, numberRules } from "../utils/validators";

interface ProfileForm {
  name: string;
  version: string;
  profilePath: string;
  javaPath: string;
  minimumMemory: number;
  maximumMemory: number;
  jvmArgument: string;
}

const visibie = shallowRef(false);

const defaultFormValue = Object.freeze<ProfileForm>({
  name: "",
  version: "",
  profilePath: "",
  javaPath: "",
  minimumMemory: 2,
  maximumMemory: 4,
  jvmArgument: "",
});
const form = ref<ProfileForm>({
  ...defaultFormValue,
});
const valid = shallowRef(false);

const resetForm = () => {
  Object.assign(form.value, defaultFormValue);
};

const create = () => {
  if (!valid.value) {
    return;
  }

  console.log("Created");
  visibie.value = false;
};
</script>

<template>
  <VDialog v-model="visibie" @after-leave="resetForm">
    <template #activator="{ props, isActive, targetRef }">
      <slot v-bind="{ props, isActive, targetRef }" />
    </template>

    <template #default="{ isActive }">
      <VForm v-model="valid" @submit.prevent="create">
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
                    v-model="form.name"
                    hide-details="auto"
                    label="Name"
                    variant="filled"
                    :rules="[commonRules.notEmpty]"
                  />
                </VCol>

                <VCol cols="3">
                  <VTextField
                    v-model="form.minimumMemory"
                    hide-details="auto"
                    label="Minimum Menory"
                    suffix="GB"
                    type="number"
                    variant="filled"
                    :rules="[
                      commonRules.notEmpty,
                      numberRules.integer,
                      numberRules.positive,
                    ]"
                  />
                </VCol>

                <VCol cols="3">
                  <VTextField
                    v-model="form.maximumMemory"
                    hide-details="auto"
                    label="Maximum Memory"
                    suffix="GB"
                    type="number"
                    variant="filled"
                    :rules="[
                      commonRules.notEmpty,
                      numberRules.integer,
                      numberRules.positive,
                    ]"
                  />
                </VCol>
              </VRow>

              <VRow>
                <VCol cols="12">
                  <VSelect
                    v-model="form.version"
                    hide-details="auto"
                    label="Version"
                    variant="filled"
                    :rules="[commonRules.notEmpty]"
                  >
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
                    v-model="form.profilePath"
                    persistent-hint
                    label="Profile Path"
                    variant="filled"
                    hint="If empty, Profile uses default Profile Path."
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
                    v-model="form.javaPath"
                    persistent-hint
                    hide-details="auto"
                    hint="If empty, Profile uses default Java Path."
                    label="Java Path"
                    variant="filled"
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
                    v-model="form.jvmArgument"
                    persistent-hint
                    hide-details="auto"
                    hint="If not empty, Profile ignores Memory allocations above."
                    label="JVM Argument"
                    variant="filled"
                  />
                </VCol>
              </VRow>
            </div>
          </VCardText>

          <VCardActions>
            <VSpacer />
            <VBtn type="button" @click="isActive.value = false">Cancel</VBtn>
            <VBtn variant="elevated" prepend-icon="mdi-plus" type="submit">
              Create
            </VBtn>
          </VCardActions>
        </VCard>
      </VForm>
    </template>
  </VDialog>
</template>
