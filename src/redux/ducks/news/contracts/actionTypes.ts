import { Action } from "redux";

import {DeleteArticleState, LoadingState, NewsState} from "./state";

export enum NewsActionsType {
    SET_NEWS = 'news/SET_NEWS',
    FETCH_NEWS = 'news/FETCH_NEWS',
    SET_LOADING_STATE = 'news/SET_LOADING_STATE',
    EDIT_PRESERVED = 'news/EDIT_PRESERVED',
    EDIT_LIKES_ARTICLES = 'news/EDIT_LIKES_ARTICLES',
    FETCH_ADD_NEWS = 'news/FETCH_ADD_NEWS',
    ADD_NEWS = 'news/ADD_NEWS',
    SET_NEWS_STATE = 'news/SET_NEWS_STATE',
    ADD_NEWS_LOADED = 'news/ADD_NEWS_LOADED',
    FETCH_DELETE_ARTICLE = 'article/FETCH_DELETE_ARTICLE',
    DELETE_ARTICLE = 'article/DELETE_ARTICLE',
    DELETE_ARTICLE_LOADED = 'article/DELETE_ARTICLE_LOADED',
    DELETE_ARTICLE_LOADING_STATE = 'article/DELETE_ARTICLE_LOADING_STATE',
    ADD_COMMENT_NEWS = 'ADD_COMMENT_NEWS',
}

export interface AddCommentNewsTypes extends Action<NewsActionsType> {
    type: NewsActionsType.ADD_COMMENT_NEWS;
    payload: any
}

export interface FetchDeleteArticleTypes extends Action<NewsActionsType> {
    type: NewsActionsType.FETCH_DELETE_ARTICLE;
    payload: number
}

export interface DeleteArticleTypes extends Action<NewsActionsType> {
    type: NewsActionsType.DELETE_ARTICLE;
    payload: any;
}

export interface DeleteArticleLoadedTypes extends Action<NewsActionsType> {
    type: NewsActionsType.DELETE_ARTICLE_LOADED;
}
export interface DeleteArticleLoadingStateTypes extends Action<NewsActionsType> {
    type: NewsActionsType.DELETE_ARTICLE_LOADING_STATE;
    payload: DeleteArticleState
}


export interface AddNewsLoadedTypes extends Action<NewsActionsType> {
    type: NewsActionsType.ADD_NEWS_LOADED;
}

export interface FetchAddNewsTypes extends Action<NewsActionsType> {
    type: NewsActionsType.FETCH_ADD_NEWS;
    payload: any;
}

export interface AddNewsTypes extends Action<NewsActionsType> {
    type: NewsActionsType.ADD_NEWS;
    payload: any;
}

export interface SetNewsStateTypes extends Action<NewsActionsType> {
    type: NewsActionsType.SET_NEWS_STATE;
    payload: any;
}

export interface EditPreservedTypes extends Action<NewsActionsType> {
    type: NewsActionsType.EDIT_PRESERVED;
    payload: any;
}

export interface EditLikeArticlesTypes extends Action<NewsActionsType>{
    type: NewsActionsType.EDIT_LIKES_ARTICLES,
    payload: any;
}

export interface SetNewsTypes extends Action<NewsActionsType> {
    type: NewsActionsType.SET_NEWS;
    payload: NewsState;
}

export interface FetchNewsTypes extends Action<NewsActionsType> {
    type: NewsActionsType.FETCH_NEWS;
}

export interface SetNewsLoadingStateTypes extends Action<NewsActionsType> {
    type: NewsActionsType.SET_LOADING_STATE;
    payload: LoadingState
}

export type NewsActions =
    | SetNewsTypes
    | FetchNewsTypes
    | SetNewsLoadingStateTypes
    | EditPreservedTypes
    | EditLikeArticlesTypes
    | AddNewsTypes
    | FetchAddNewsTypes
    | SetNewsStateTypes
    | AddNewsLoadedTypes
    | FetchDeleteArticleTypes
    | DeleteArticleTypes
    | DeleteArticleLoadedTypes
    | DeleteArticleLoadingStateTypes
    | AddCommentNewsTypes;
