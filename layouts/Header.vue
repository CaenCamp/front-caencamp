<template>
  <header class="flex flex-row justify-center items-center">
    <n-link to="/">
      <img
        src="https://www.caen.camp/static/logoFondBlanc-278da657a83902f7d21083ade8e9ce7a.png"
        alt="logo-caen-camp"
      />
    </n-link>
    <slot name="nav" />
  </header>
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
