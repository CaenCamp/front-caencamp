<template>
  <section>
    <main>Job Board</main>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { store } = useContext()

    return {}
  },
})
</script>

<style scoped></style>
