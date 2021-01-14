import { HydraResponse, Service } from '~/types'
import type { EventsService } from './events.type'
import { EventDto } from '~/services/dto'

const eventsService: Service<EventsService> = ($axios) => (resource) => ({
  async getSome({ page, itemsPerPage }) {
    const response: HydraResponse<EventDto[]> = await $axios.$get(
      `${resource}?page=${page}&itemsPerPage=${itemsPerPage}`
    )
    return response['hydra:member']
  },
  async getSingle(id) {
    const response: EventDto = await $axios.$get(`${resource}/id`)
    return response
  },
})

export type { EventsService }
export { eventsService }
