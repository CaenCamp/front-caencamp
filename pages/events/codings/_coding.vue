<template>
  <section>
    <main>Coding {{ params.coding }}</main>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { params } = useContext()
    return { params }
  },
})
</script>

<style scoped></style>
