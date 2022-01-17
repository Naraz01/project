import { Action } from "redux";
import { LoadingState, userState,  SaveLoadingState, LikeLoadingState} from "./state";

export enum UserActionsType {
    SET_USER = 'user/SET_USER',
    FETCH_USER = 'user/FETCH_USER',
    SET_LOADING_USER = 'user/SET_LOADING_USER',
    SET_USER_NEWS_SAVE = 'user/SET_USER_NEWS_SAVE',
    FETCH_USER_NEWS_SAVE = 'user/FETCH_USER_NEWS_SAVE',
    SET_LOADING_USER_NEWS_SAVE = 'user/SET_LOADING_USER_NEWS_SAVE',
    SET_USER_NEWS_LIKE = 'user/SET_USER_NEWS_LIKE',
    FETCH_USER_NEWS_LIKE = 'user/FETCH_USER_NEWS_LIKE',
    SET_LOADING_USER_NEWS_LIKE = 'user/FETCH_USER_NEWS_LIKE',
    ADD_USER_ARTICLE = 'user/ADD_USER_ARTICLE',
    DELETE_USER_ARTICLE = 'user/DELETE_USER_ARTICLE',
    
}


export interface AddUserArticleTypes extends Action<UserActionsType> {
    type: UserActionsType.ADD_USER_ARTICLE;
    payload: any;
}

export interface DeleteUserArticleTypes extends Action<UserActionsType> {
    type: UserActionsType.DELETE_USER_ARTICLE;
    payload: any;
}

export interface FetchUserTypes extends Action<UserActionsType> {
    type: UserActionsType.FETCH_USER;
    payload: string | undefined
}
export interface SetUserTypes extends Action<UserActionsType> {
    type: UserActionsType.SET_USER;
    payload: userState;
}
export interface SetUserLoadingStateTypes extends Action<UserActionsType> {
    type: UserActionsType.SET_LOADING_USER;
    payload: LoadingState
}




export interface FetchUserNewsSaveTypes extends Action<UserActionsType> {
    type: UserActionsType.FETCH_USER_NEWS_SAVE;
    payload: string | undefined
}
export interface SetUserNewsSaveTypes extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_NEWS_SAVE;
    payload: any;
}
export interface SetUserNewsSaveLoadingStateTypes extends Action<UserActionsType> {
    type: UserActionsType.SET_LOADING_USER_NEWS_SAVE;
    payload: SaveLoadingState
}



export interface FetchUserNewsLikeTypes extends Action<UserActionsType> {
    type: UserActionsType.FETCH_USER_NEWS_LIKE;
    payload: string | undefined
}
export interface SetUserNewsLikeTypes extends Action<UserActionsType> {
    type: UserActionsType.SET_USER_NEWS_LIKE;
    payload: any;
}
export interface SetUserNewsLikeLoadingStateTypes extends Action<UserActionsType> {
    type: UserActionsType.SET_LOADING_USER_NEWS_LIKE;
    payload: LikeLoadingState
}


export type UserActions =
    | SetUserTypes
    | FetchUserTypes
    | SetUserLoadingStateTypes
    | FetchUserNewsSaveTypes
    | SetUserNewsSaveTypes
    | SetUserNewsSaveLoadingStateTypes
    | FetchUserNewsLikeTypes
    | SetUserNewsLikeTypes
    | SetUserNewsLikeLoadingStateTypes
    | AddUserArticleTypes
    | DeleteUserArticleTypes;
