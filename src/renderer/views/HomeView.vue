<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();
</script>

<template>
  <h1>💖 Hello World!</h1>
  <p>Welcome to your Electron application.</p>
  <p>Counter: {{ store.count }}</p>
  <VBtn @click="store.increment">Increment</VBtn>
</template>