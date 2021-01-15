<template>
  <section>
    <main>
      Codings<br />
      <n-link to="/events/codings/15">Go to Codings 15</n-link><br />
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
