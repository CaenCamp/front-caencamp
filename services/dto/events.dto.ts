import { Organization, Person, Place } from 'schema-dts'

import { EventAttendanceMode } from '~/types'

interface EventDto {
  '@id': string
  '@type': string
  startDate: string
  duration: string
  eventAttendanceMode: EventAttendanceMode
  location: Place
  organizer: Organization
  performers: Person[]
  subEvents: EventDto[]
  description: string
  name: string
}

export type { EventDto }
