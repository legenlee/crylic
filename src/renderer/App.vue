<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { RouteNames } from "./routes";

const auth = ref(false);

const titlebarHeight = ref(0);
const updateTitleBarHeight = (
  // eslint-disable-next-line no-undef
  event: WindowControlsOverlayGeometryChangeEvent,
) => {
  titlebarHeight.value = event.titlebarAreaRect.height;
};

onMounted(() => {
  window.navigator.windowControlsOverlay.addEventListener(
    "geometrychange",
    updateTitleBarHeight,
  );

  titlebarHeight.value =
    window.navigator.windowControlsOverlay.getTitlebarAreaRect().height;
});

onUnmounted(() => {
  window.navigator.windowControlsOverlay.removeEventListener(
    "geometrychange",
    updateTitleBarHeight,
  );
});
</script>

<template>
  <VApp>
    <VSystemBar class="titlebar" color="surface" :height="titlebarHeight">
      <div class="mx-auto">Nozomi (In Development)</div>
    </VSystemBar>

    <VNavigationDrawer permanent rail absolute>
      <VList nav density="compact">
        <VListItem
          link
          :to="{ name: RouteNames.PROFILES }"
          prepend-icon="mdi-apps"
        />
      </VList>

      <template #append>
        <VList nav density="compact">
          <VMenu v-if="auth">
            <template #activator="{ props }">
              <VListItem v-bind="props" prepend-icon="mdi-account" />
            </template>

            <VList density="compact">
              <VListItem title="Sign out" prepend-icon="mdi-logout" />
            </VList>
          </VMenu>
          <VMenu v-else>
            <template #activator="{ props }">
              <VListItem v-bind="props" prepend-icon="mdi-account" />
            </template>

            <VList density="compact">
              <VListItem title="Sign In" prepend-icon="mdi-login" link />
            </VList>
          </VMenu>

          <VListItem link prepend-icon="mdi-download" />

          <VListItem
            link
            :to="{ name: RouteNames.SETTINGS }"
            prepend-icon="mdi-cog"
          />
        </VList>
      </template>
    </VNavigationDrawer>

    <VMain scrollable>
      <VContainer class="fill-height" fluid>
        <div class="title-bar"></div>

        <RouterView v-slot="{ Component }">
          <VSlideYReverseTransition hide-on-leave>
            <component :is="Component" style="width: 100%; min-height: 100%" />
          </VSlideYReverseTransition>
        </RouterView>
      </VContainer>
    </VMain>
  </VApp>
</template>

<style scoped>
.titlebar {
  -webkit-app-region: drag;
}
</style>
