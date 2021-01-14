import type { ActionContext } from 'vuex'
import type { EventLite, Event, Nullable } from '~/types'

interface EventsState {
  events: EventLite[]
  event: Nullable<Event>
}

enum EventsActionTypes {
  FETCH_SOME_EVENTS = 'FETCH_SOME_EVENTS',
  FETCH_SINGLE_EVENT = 'FETCH_SINGLE_EVENT',
}

enum EventsMutationTypes {
  SET_EVENTS = 'SET_EVENTS',
  SET_EVENT = 'SET_EVENT',
}

type Mutations = {
  [EventsMutationTypes.SET_EVENTS](
    state: EventsState,
    payload: EventLite[]
  ): void
  [EventsMutationTypes.SET_EVENT](
    state: EventsState,
    payload: Nullable<Event>
  ): void
}

type Actions = {
  [EventsActionTypes.FETCH_SOME_EVENTS](
    ctx: ActionContext<EventsState, EventsState>,
    payload: EventLite[]
  ): Promise<EventLite[]>
  [EventsActionTypes.FETCH_SINGLE_EVENT](
    ctx: ActionContext<EventsState, EventsState>,
    payload: Nullable<Event>
  ): Promise<Nullable<Event>>
}

type Getters = {
  event(state: EventsState): Nullable<Event>
  events(state: EventsState): EventLite[]
}

export { EventsActionTypes, EventsMutationTypes }
export type { Mutations, Actions, Getters, EventsState }
