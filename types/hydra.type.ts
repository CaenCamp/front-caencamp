interface HydraSearchMapping {
  '@type': string
  variable: string
  property: string
  required: boolean
}

interface HydraSearch {
  '@type': string
  'hydra:template': string
  'hydra:variableRepresentation': string
  'hydra:mapping': HydraSearchMapping[]
}

interface HydraView {
  '@id': string
  '@type': string
  'hydra:first': string
  'hydra:last': string
  'hydra:next': string
}

interface HydraResponse<HydraMember> {
  '@context': string
  '@id': string
  '@type': string
  'hydra:member': HydraMember
  'hydra:totalItems': number
  'hydra:view': HydraView
  'hydra:search': HydraSearch
}
interface HydraPagination {
  page: number
  itemsPerPage: number
}
export type { HydraResponse, HydraPagination }
