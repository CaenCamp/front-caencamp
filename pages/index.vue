<template>
  <section>
    <main>
      <div v-for="event in events" :key="event['@id']">{{ event.name }}</div>
      <button @click="loadEvents">Fetch Events</button>
    </main>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { useContext } from '@nuxtjs/composition-api'

import { EventsActionTypes } from '~/store'

export default defineComponent({
  setup() {
    const { store } = useContext()
    const events = computed(() => store.getters['events/events'])

    const loadEvents = async () => {
      await store.dispatch(`events/${EventsActionTypes.FETCH_SOME_EVENTS}`)
    }

    return { loadEvents, events }
  },
})
</script>

<style scoped></style>
