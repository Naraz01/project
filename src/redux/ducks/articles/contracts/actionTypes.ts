import { Action } from "redux";
import { LoadingState, articlesState } from "./state";

export enum ArticleActionsType {
    SET_ARTICLE = 'articles/SET_ARTICLE',
    FETCH_ARTICLE = 'article/FETCH_ARTICLE',
    SET_LOADING_ARTICLE= 'article/SET_LOADING_ARTICLE',
    EDIT_PRESERVED_ARTICLE = 'article/EDIT_PRESERVED_ARTICLE',
    EDIT_LIKE_ARTICLE = 'article/EDIT_LIKE_ARTICLE',
    ADD_COMMENT_ARTICLE = 'article/ADD_COMMENT_ARTICLE'
}

export interface AddCommentArticleTypes extends Action<ArticleActionsType> {
    type: ArticleActionsType.ADD_COMMENT_ARTICLE;
    payload: any;
}

export interface SetArticleTypes extends Action<ArticleActionsType> {
    type: ArticleActionsType.SET_ARTICLE;
    payload: articlesState;
}

export interface EditPreservedArticleTypes extends Action<ArticleActionsType> {
    type: ArticleActionsType.EDIT_PRESERVED_ARTICLE;
    payload: any;
}

export interface EditLikeArticleTypes extends Action<ArticleActionsType> {
    type: ArticleActionsType.EDIT_LIKE_ARTICLE;
    payload: any;
}

export interface FetchArticleTypes extends Action<ArticleActionsType> {
    type: ArticleActionsType.FETCH_ARTICLE;
    payload: string | undefined
}

export interface SetArticleLoadingStateTypes extends Action<ArticleActionsType> {
    type: ArticleActionsType.SET_LOADING_ARTICLE;
    payload: LoadingState
}

export type CompanyActions =
    | SetArticleTypes
    | FetchArticleTypes
    | SetArticleLoadingStateTypes
    | EditPreservedArticleTypes
    | EditLikeArticleTypes
    | AddCommentArticleTypes;
