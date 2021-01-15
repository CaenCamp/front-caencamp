<template>
  <section>
    <main>
      Devops<br />
      <n-link to="/events/devops/15">Go to Devops 15</n-link><br />
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
