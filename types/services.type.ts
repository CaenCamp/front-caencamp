import { NuxtAxiosInstance } from '@nuxtjs/axios'

type Service<T> = ($axios: NuxtAxiosInstance) => (resource: string) => T

export type { Service }
