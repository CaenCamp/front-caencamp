import { ActionTree, GetterTree, MutationTree } from 'vuex'

import {
  Actions,
  EventsActionTypes,
  EventsMutationTypes,
  EventsState,
  Getters,
  Mutations,
} from './events.type'
import { Context } from '@nuxt/types'

const state = (): EventsState => ({
  events: [],
  event: null,
})
const mutations: MutationTree<EventsState> & Mutations = {
  [EventsMutationTypes.SET_EVENT](state, payload) {
    state.event = payload
    return payload
  },
  [EventsMutationTypes.SET_EVENTS](state, payload) {
    state.events = payload
    return payload
  },
}
const actions: ActionTree<EventsState, EventsState> & Actions = {
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

const getters: GetterTree<EventsState, EventsState> & Getters = {
  event: ({ event }) => event,
  events: ({ events }) => events,
}

export { state, mutations, actions, getters, EventsActionTypes }
