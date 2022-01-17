import {PersonActionsType, PersonActions} from "./contracts/actionTypes";
import {LoadingState, personState} from "./contracts/state";

const initialNewsState: personState = {
    items: [],
    myFriends: [],
    notFriends: [],
    loadingState: LoadingState.NEVER
};

export const personReducer = (state = initialNewsState, action: PersonActions) => {
    switch (action.type) {
        case (PersonActionsType.SET_PERSON) : {
            return {
            ...state, items: action.payload, loadingState: LoadingState.LOADED
            };
        }
        case (PersonActionsType.FETCH_PERSON) : {
            return {
            ...state, items: [], loadingState: LoadingState.LOADING
            };
        }
        case (PersonActionsType.SET_LOADING_STATE) : {
            return {
            ...state,  loadingState: action.payload
            };
        }
        case PersonActionsType.SET_NOT_FRIENDS: {
            let ids = action.payload;
            let friends:any = [];

            ids.map((item:number) => {
                return state.items.filter((user) => {
                    if (user.id === item) {
                        friends.push(user)
                    }
                });
            });

            console.log(friends);

            return {...state}
        }
        default : {
            return state
        }
    }
};
