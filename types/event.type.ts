import { Item } from './global.type'
import { Organization, Person, Place } from 'schema-dts'

interface Event extends Item {
  startDate: string
  duration: string
  eventAttendanceMode: EventAttendanceMode
  location: Place
  organizer: Organization
  performers: Person[]
  subEvents: Event[]
  description: string
  name: string
}
//
// interface Location extends Item {
//   name: string
//   description: string
//   address: Address
// }
//
// interface Address extends Item {
//   addressLocality: string
//   postalCode: string
//   streetAddress: string
// }
//
// interface Organizer extends Item {
//   description: string
//   image: string
//   name: string
// }
//
// interface Performer extends Item {
//   description: string
//   name: string
// }

enum EventAttendanceMode {
  Offline = 'offline',
  Online = 'online',
}

export type { Event }
export { EventAttendanceMode }
