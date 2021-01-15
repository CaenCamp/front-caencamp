import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { Context } from '@nuxt/types'

import { RootState } from './index.type'
import {
  EventsActions,
  EventsActionTypes,
  EventsMutationTypes,
  EventsState,
  EventsGetters,
  EventsMutations,
} from './events.type'

const state = (): EventsState => ({
  events: [],
  event: null,
})

const mutations: MutationTree<EventsState> & EventsMutations = {
  [EventsMutationTypes.SET_EVENT](state, payload) {
    state.event = payload
    return payload
  },
  [EventsMutationTypes.SET_EVENTS](state, payload) {
    state.events = payload
    return payload
  },
}

const actions: ActionTree<EventsState, RootState> & EventsActions = {
  async [EventsActionTypes.FETCH_SINGLE_EVENT]({ commit, getters }, payload) {
    const { $api } = (this as unknown) as Context
    const data = await $api.events.getSingle('')
    commit(EventsMutationTypes.SET_EVENT, data)
    return data
  },
  async [EventsActionTypes.FETCH_SOME_EVENTS]({ commit, getters }, payload) {
    const { $api } = (this as unknown) as Context
    const data = await $api.events.getSome({
      itemsPerPage: 30,
      page: 1,
    })
    commit(EventsMutationTypes.SET_EVENTS, data ?? [])
    return data
  },
}

const getters: GetterTree<EventsState, RootState> & EventsGetters = {
  event: ({ event }) => event,
  events: ({ events }) => events,
}

export { state, mutations, actions, getters, EventsActionTypes }
export type { EventsState, EventsGetters, EventsActions, EventsMutations }
