import type { EventsService } from '~/services'

interface Api {
  events: EventsService
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: Api
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: Api
  }
  interface Context {
    $api: Api
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $api: Api
  }
}
