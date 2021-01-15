import type { ActionContext } from 'vuex'
import type { EventLite, Event, Nullable } from '~/types'
import { RootState } from './index.type'

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

type EventsMutations = {
  [EventsMutationTypes.SET_EVENTS](
    state: EventsState,
    payload: EventLite[]
  ): void
  [EventsMutationTypes.SET_EVENT](
    state: EventsState,
    payload: Nullable<Event>
  ): void
}

type EventsActions = {
  [EventsActionTypes.FETCH_SOME_EVENTS](
    ctx: ActionContext<EventsState, RootState>,
    payload: EventLite[]
  ): Promise<EventLite[]>
  [EventsActionTypes.FETCH_SINGLE_EVENT](
    ctx: ActionContext<EventsState, RootState>,
    payload: Nullable<Event>
  ): Promise<Nullable<Event>>
}

type EventsGetters = {
  event(state: EventsState): Nullable<Event>
  events(state: EventsState): EventLite[]
}

export { EventsActionTypes, EventsMutationTypes }
export type { EventsMutations, EventsActions, EventsGetters, EventsState }
