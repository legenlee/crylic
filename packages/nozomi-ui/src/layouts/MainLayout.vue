<script setup lang="ts">
import { shallowRef } from "vue";
import { NAVIGATION_DRAWER } from "../constants/navigation";
import { SETTINGS_ROUTE_NAMES } from "../constants/route";

const drawer = shallowRef(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<template>
  <VLayout class="bg-surface">
    <VAppBar color="transparent">
      <template #prepend>
        <VBtn
          icon="mdi-menu"
          variant="plain"
          @click="toggleDrawer"
        />
      </template>

      <template #append>
        <VBtn
          icon="mdi-cog"
          :to="{
            name: SETTINGS_ROUTE_NAMES.settings,
          }"
          variant="plain"
        />

        <VMenu>
          <VCard
            min-width="200"
            elevation="3"
          >
            <VCardTitle>
              <VListItemSubtitle>Accounts</VListItemSubtitle>
            </VCardTitle>

            <VCardItem class="pa-0">
              <VList max-height="300">
                <VListItem
                  v-for="i in 20"
                  :key="i"
                  prepend-icon="mdi-account"
                  :title="`Account ${i}`"
                  subtitle="Microsoft"
                  @click.stop
                />
              </VList>
              <VDivider />
              <VListItem
                prepend-icon="mdi-plus"
                title="Add Account"
                @click.stop
              />
            </VCardItem>
          </VCard>

          <template #activator="{ props }">
            <VBtn
              v-bind="props"
              icon="mdi-account-circle"
              variant="plain"
            />
          </template>
        </VMenu>
      </template>
    </VAppBar>

    <VNavigationDrawer
      border="0"
      color="transparent"
      :rail="drawer"
    >
      <VList
        color="primary"
        :items="NAVIGATION_DRAWER.default"
        nav
      />
    </VNavigationDrawer>

    <VMain scrollable>
      <VContainer
        class="fill-height bg-background rounded-t-xl"
        fluid
      >
        <RouterView v-slot="{ Component }">
          <VSlideYReverseTransition hide-on-leave>
            <component :is="Component" />
          </VSlideYReverseTransition>
        </RouterView>
      </VContainer>
    </VMain>
  </VLayout>
</template>
