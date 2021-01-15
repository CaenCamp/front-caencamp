<template>
  <section>
    <main>
      <div v-for="event in events" :key="event['@id']">
        {{ event.name }}
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { useContext, useAsync } from '@nuxtjs/composition-api'

import { EventsActionTypes } from '~/store'

export default defineComponent({
  setup() {
    const { store } = useContext()
    const events = computed(() => store.getters['events/events'])

    /**
     * Fetch events
     */
    useAsync(() =>
      store.dispatch(`events/${EventsActionTypes.FETCH_SOME_EVENTS}`)
    )
    return { events }
  },
})
</script>

<style scoped></style>
