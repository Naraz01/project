import {CommentActionsType, CommentActions} from "./contracts/actionTypes";
import {LoadingState, commentState } from "./contracts/state";

const initialNewsState: commentState = {
    data: undefined,
    loadingState: LoadingState.NEVER
};

export const commentReducer = (state = initialNewsState, action: CommentActions) => {
    switch (action.type) {
        case (CommentActionsType.SET_COMMENT) : {
           return {...state, loadingState: LoadingState.LOADED};
        }
        case CommentActionsType.FETCH_COMMENT: {
            return {...state, loadingState: LoadingState.LOADING}
        }
        case CommentActionsType.SET_LOADING_COMMENT: {
            return {...state, loadingState: action.payload}
        }
        case CommentActionsType.SET_LOADED_COMMENT: {
            return {...state, loadingState: LoadingState.NEVER}
        }
        default : {
            return state
        }
    }
};
