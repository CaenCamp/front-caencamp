<template>
  <nav class="flex flex-row">
    <n-link class="mx-4 whitespace-no-wrap" to="/">Accueil</n-link>
    <n-link class="mx-4 whitespace-no-wrap" to="/speakers">Les speakers</n-link>
    <n-link class="mx-4 whitespace-no-wrap" to="/events/talks"
      >Les talks</n-link
    >
    <n-link class="mx-4 whitespace-no-wrap" to="/events/codings">
      Les codings
    </n-link>
    <n-link class="mx-4 whitespace-no-wrap" to="/events/devops">
      Les devops
    </n-link>
    <n-link class="mx-4 whitespace-no-wrap" to="/job-board"
      >Le job board</n-link
    >
    <n-link class="mx-4 whitespace-no-wrap" to="/sponsors">Les sponsors</n-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
