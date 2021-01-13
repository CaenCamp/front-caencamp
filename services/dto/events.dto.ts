enum EventAttendanceMode {
  Offline = 'offline',
  Online = 'online',
}

interface EventDto {
  '@id': string
  '@type': 'http://schema.org/Event'
  startDate: string
  duration: string
  eventAttendanceMode: EventAttendanceMode
  location: LocationDto
  organizer: OrganizerDto
  performers: PerformerDto[]
  subEvents: EventDto[]
  description: string
  name: string
}

interface LocationDto {
  '@id': string
  '@type': 'http://schema.org/Place'
  name: string
  description: string
  address: AddressDto
}

interface AddressDto {
  '@id': string
  '@type': 'http://schema.org/PostalAddress'
  addressLocality: string
  postalCode: string
  streetAddress: string
}

interface OrganizerDto {
  '@id': string
  '@type': 'http://schema.org/Organization'
  description: string
  image: string
  name: string
}

interface PerformerDto {
  '@id': string
  '@type': 'http://schema.org/Person'
  description: string
  name: string
}

export type { EventDto }
