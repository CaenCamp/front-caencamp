import type { HydraPagination, Event, EventLite } from '~/types'

interface EventsService {
  getSome: ({ page, itemsPerPage }: HydraPagination) => Promise<EventLite[]>
  getSingle: (id: string) => Promise<Event>
}

export type { EventsService }
