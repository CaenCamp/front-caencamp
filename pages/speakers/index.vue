<template>
  <section>
    <main>
      Speakers<br />
      <n-link to="/speakers/15">Go to Speaker 15</n-link>
    </main>
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
