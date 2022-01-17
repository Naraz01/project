import { Action } from "redux";
import {LoadingState, commentState, comment} from "./state";

export enum CommentActionsType {
    FETCH_COMMENT = 'comment/FETCH_COMMENT',
    SET_COMMENT = 'comment/SET_COMMENT',
    SET_LOADING_COMMENT = 'comment/SET_LOADING_COMMENT',
    SET_LOADED_COMMENT = 'comment/SET_LOADED_COMMENT',
}

export interface SetCommentTypes extends Action<CommentActionsType> {
    type: CommentActionsType.SET_COMMENT;
    payload: commentState;
}

export interface FetchCommentTypes extends Action<CommentActionsType> {
    type: CommentActionsType.FETCH_COMMENT;
    payload: comment
}

export interface SetCommentLoadingStateTypes extends Action<CommentActionsType> {
    type: CommentActionsType.SET_LOADING_COMMENT;
    payload: LoadingState
}

export interface SetCommentLoadedStateTypes extends Action<CommentActionsType> {
    type: CommentActionsType.SET_LOADED_COMMENT;
}
export type CommentActions =
    | SetCommentTypes
    | FetchCommentTypes
    | SetCommentLoadingStateTypes
    | SetCommentLoadedStateTypes;
