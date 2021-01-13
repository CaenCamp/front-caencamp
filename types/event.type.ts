interface Event {
  '@id': string
  startDate: string
  duration: string
  eventAttendanceMode: EventAttendanceMode
  location: Location
  organizer: Organizer
  performers: Performer[]
  subEvents: Event[]
  description: string
  name: string
}

interface Location {
  '@id': string
  name: string
  description: string
  address: Address
}

interface Address {
  '@id': string
  addressLocality: string
  postalCode: string
  streetAddress: string
}

interface Organizer {
  '@id': string
  description: string
  image: string
  name: string
}

interface Performer {
  '@id': string
  description: string
  name: string
}

enum EventAttendanceMode {
  Offline = 'offline',
  Online = 'online',
}

export type { Event }
export { EventAttendanceMode }
