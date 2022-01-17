import {
    PersonActionsType,
    FetchPersonTypes,
    SetPersonLoadingStateTypes,
    SetPersonTypes,
    SetNotFriendsTypes,
    SetMyFriendsTypes
} from "./contracts/actionTypes";
import {personState, LoadingState} from "./contracts/state";


export const SetNotFriends = (payload: any):SetNotFriendsTypes => ({
    type: PersonActionsType.SET_NOT_FRIENDS,
    payload,
});

export const SetMyFriends = (payload: any):SetMyFriendsTypes => ({
    type: PersonActionsType.SET_MY_FRIENDS,
    payload,
});

export const SetPerson = (payload: personState):SetPersonTypes => ({
    type: PersonActionsType.SET_PERSON,
    payload,
});

export const FetchPerson = ():FetchPersonTypes => ({
    type: PersonActionsType.FETCH_PERSON
});

export const SetPersonLoading = (payload: LoadingState):SetPersonLoadingStateTypes => ({
    type: PersonActionsType.SET_LOADING_STATE,
    payload,
});
