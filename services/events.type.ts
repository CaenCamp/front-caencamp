import type { HydraPagination, Event } from '~/types'

interface EventsService {
  getSome: ({ page, itemsPerPage }: HydraPagination) => Promise<Event[]>
}

export type { EventsService }
