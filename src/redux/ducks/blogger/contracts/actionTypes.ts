import { Action } from "redux";

import { LoadingState, bloggerState } from "./state";

export enum BloggerActionsType {
    SET_BLOGGER = 'blogger/SET_BLOGGER',
    SET_ARTICLES = 'blogger/SET_ARTICLES',
    FETCH_BLOGGER = 'blogger/FETCH_BLOGGER',
    SET_LOADING_BLOGGER= 'blogger/SET_LOADING_STATE',
}

export interface SetBloggerTypes extends Action<BloggerActionsType> {
    type: BloggerActionsType.SET_BLOGGER;
    payload: bloggerState;
}
export interface SetArticlesTypes extends Action<BloggerActionsType> {
    type: BloggerActionsType.SET_ARTICLES;
    payload: any;
}
export interface FetchBloggerTypes extends Action<BloggerActionsType> {
    type: BloggerActionsType.FETCH_BLOGGER;
    payload: string | undefined
}

export interface SetBloggerLoadingStateTypes extends Action<BloggerActionsType> {
    type: BloggerActionsType.SET_LOADING_BLOGGER;
    payload: LoadingState
}

export type CompanyActions =
    | SetBloggerTypes
    | FetchBloggerTypes
    | SetBloggerLoadingStateTypes
    | SetArticlesTypes;
