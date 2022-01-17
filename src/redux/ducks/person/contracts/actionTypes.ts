import { Action } from "redux";

import { LoadingState, personState } from "./state";

export enum PersonActionsType {
    SET_PERSON = 'person/SET_PERSON',
    FETCH_PERSON = 'person/FETCH_PERSON',
    SET_LOADING_STATE = 'person/SET_LOADING_STATE',
    SET_MY_FRIENDS = 'person/SET_MY_FRIENDS',
    SET_NOT_FRIENDS = 'person/SET_NOT_FRIENDS',
}

export interface SetMyFriendsTypes extends Action<PersonActionsType> {
    type: PersonActionsType.SET_MY_FRIENDS;
    payload: any;
}

export interface SetNotFriendsTypes extends Action<PersonActionsType> {
    type: PersonActionsType.SET_NOT_FRIENDS;
    payload: any;
}

export interface SetPersonTypes extends Action<PersonActionsType> {
    type: PersonActionsType.SET_PERSON;
    payload: personState;
}

export interface FetchPersonTypes extends Action<PersonActionsType> {
    type: PersonActionsType.FETCH_PERSON;
}

export interface SetPersonLoadingStateTypes extends Action<PersonActionsType> {
    type: PersonActionsType.SET_LOADING_STATE;
    payload: LoadingState
}

export type PersonActions =
    | SetPersonTypes
    | FetchPersonTypes
    | SetPersonLoadingStateTypes
    | SetMyFriendsTypes
    | SetNotFriendsTypes;
