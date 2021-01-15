import { Plugin } from '@nuxt/types'

import { events } from '~/services'

const servicesPlugin: Plugin = (ctx, inject) => {
  inject('api', {
    events: events(ctx.$axios)('/events'),
  })
}

export default servicesPlugin
