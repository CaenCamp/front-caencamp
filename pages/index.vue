<template>
  <section>
    <main>
      <div v-for="event in events" :key="event['@id']">{{ event.name }}</div>
      <button @click="loadEvents">Fetch Events</button>
    </main>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { useContext } from '@nuxtjs/composition-api'

import { Event } from '~/types'

export default defineComponent({
  setup() {
    const { $api } = useContext()
    const message = ref('This is a message')
    let events = ref<Event[]>([])

    const loadEvents = async () => {
      events.value = await $api.events.getSome({
        page: 1,
        itemsPerPage: 30,
      })
    }

    return {
      message,
      loadEvents,
      events,
    }
  },
})
</script>

<style scoped></style>
