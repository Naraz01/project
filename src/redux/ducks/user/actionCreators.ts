import {
    AddUserArticleTypes, DeleteUserArticleTypes,
    FetchUserNewsLikeTypes,
    FetchUserNewsSaveTypes,
    FetchUserTypes,
    SetUserLoadingStateTypes,
    SetUserNewsLikeLoadingStateTypes,
    SetUserNewsLikeTypes,
    SetUserNewsSaveLoadingStateTypes,
    SetUserNewsSaveTypes,
    SetUserTypes,
    UserActionsType
} from "./contracts/actionTypes";
import {LikeLoadingState, LoadingState, SaveLoadingState, userState} from "./contracts/state";

export const AddUserArticle = (payload:any):AddUserArticleTypes => ({
    type: UserActionsType.ADD_USER_ARTICLE,
    payload
});

export const DeleteUserArticle = (payload:any):DeleteUserArticleTypes => ({
    type: UserActionsType.DELETE_USER_ARTICLE,
    payload
});

export const SetUser = (payload: userState | any):SetUserTypes => ({
    type: UserActionsType.SET_USER,
    payload,
});

export const FetchUser = (payload: string):FetchUserTypes => ({
    type: UserActionsType.FETCH_USER,
    payload
});

export const SetUserLoading = (payload: LoadingState):SetUserLoadingStateTypes => ({
    type: UserActionsType.SET_LOADING_USER,
    payload,
});

export const FetchUserNewsSave = (payload: any):FetchUserNewsSaveTypes => ({
    type: UserActionsType.FETCH_USER_NEWS_SAVE,
    payload
});

export const SetUserNewsSave = (payload: userState | any):SetUserNewsSaveTypes => ({
    type: UserActionsType.SET_USER_NEWS_SAVE,
    payload,
});

export const SetUserNewsSaveLoadingState = (payload: SaveLoadingState):SetUserNewsSaveLoadingStateTypes => ({
    type: UserActionsType.SET_LOADING_USER_NEWS_SAVE,
    payload,
});

export const FetchUserNewsLike = (payload: any):FetchUserNewsLikeTypes => ({
    type: UserActionsType.FETCH_USER_NEWS_LIKE,
    payload,
});

export const SetUserNewsLike = (payload: any):SetUserNewsLikeTypes => ({
    type: UserActionsType.SET_USER_NEWS_LIKE,
    payload,
});

export const SetUserNewsLikeLoadingState = (payload: LikeLoadingState):SetUserNewsLikeLoadingStateTypes => ({
    type: UserActionsType.SET_LOADING_USER_NEWS_LIKE,
    payload,
});
