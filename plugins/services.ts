import { Inject, Context } from '@nuxt/types/app'

import { eventsService, EventsService } from '~/services'

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

export default (ctx: Context, inject: Inject) => {
  const events = eventsService(ctx.$axios)('/events')
  inject('api', {
    events,
  })
}
