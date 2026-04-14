<script setup lang="ts">
import { MAIN_ROUTE_NAMES } from "../../constants/route";
</script>

<template>
  <VMain class="full-height d-flex justify-center align-center">
    <div class="text-center">
      <h1 class="text-headline-large mt-0">Oops, something went wrong.</h1>
      <p>
        You have just discovered the void. Please go back to where you came
        from.
      </p>
      <VBtn
        color="primary"
        variant="tonal"
        :to="{ name: MAIN_ROUTE_NAMES.home, replace: true }"
      >
        Back to the Home
      </VBtn>
    </div>
  </VMain>
</template>
