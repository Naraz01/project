import {UserActions, UserActionsType} from "./contracts/actionTypes";
import {LikeLoadingState, LoadingState, SaveLoadingState, userState} from "./contracts/state";

const initialNewsState: userState = {
    data: undefined,
    saved: undefined,
    saveLoadingState: SaveLoadingState.NEVER,
    likeLoadingState: LikeLoadingState.NEVER,
    loadingState: LoadingState.NEVER
};

export const userReducer = (state = initialNewsState, action: UserActions) => {
    switch (action.type) {
        case (UserActionsType.SET_USER) : {
           return {
            ...state, data: action.payload, loadingState: LoadingState.LOADED
            };
        }
        case (UserActionsType.FETCH_USER) : {
            return{
                ...state, data: [], loadingState: LoadingState.LOADING
            };
        }
        case (UserActionsType.SET_LOADING_USER) : {
            return {
            ...state, loadingState: action.payload
            };
        }

        case (UserActionsType.FETCH_USER_NEWS_SAVE) : {
            return {
                ...state, preserved: [], saveLoadingState: SaveLoadingState.LOADING
            };
        }
        case (UserActionsType.SET_USER_NEWS_SAVE) : {
            let copyState = {...state};
            copyState.saveLoadingState = SaveLoadingState.NEVER;
            return copyState
        }
        case (UserActionsType.SET_LOADING_USER_NEWS_SAVE) : {
            return {
                ...state, saveLoadingState: action.payload
            };
        }

        case (UserActionsType.FETCH_USER_NEWS_LIKE) : {
            return {
                ...state, likeLoadingState: LikeLoadingState.LOADING
            }
        }

        case (UserActionsType.SET_USER_NEWS_LIKE) : {
            return {
                ...state, likeLoadingState: LikeLoadingState.NEVER
            }
        };

        case (UserActionsType.SET_LOADING_USER_NEWS_LIKE) : {
            return {
                ...state, likeLoadingState: action.payload
            };
        }

        case UserActionsType.ADD_USER_ARTICLE: {
            if (state && state.data && state.data.news) {
                let copyState = {...state};
                copyState.data = {...state.data}
                copyState.data.news = [...state.data.news, action.payload]
                return copyState
            }
            return {...state}
        }

        case UserActionsType.DELETE_USER_ARTICLE: {
            if (state && state.data && state.data.news) {
                let filterNews = state.data.news.filter((item:any) => {
                    return item.id !== action.payload
                });
                let copyState = {...state};
                copyState.data = {...state.data};
                copyState.data.news = filterNews;
                return copyState
            }
            return {...state}
        }

        default : {
            return state
        }
    }
};
