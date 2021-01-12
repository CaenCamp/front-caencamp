type Nullable<T> = T | null

interface Item {
  '@id': string
  '@type': string
}
export type { Nullable, Item }
