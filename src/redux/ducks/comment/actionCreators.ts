import {
    CommentActionsType,
    SetCommentTypes,
    FetchCommentTypes,
    SetCommentLoadingStateTypes,
    SetCommentLoadedStateTypes
} from "./contracts/actionTypes";
import {comment, commentState, LoadingState} from "./contracts/state";

export const SetComment = (payload: commentState | any):SetCommentTypes => ({
    type: CommentActionsType.SET_COMMENT,
    payload,
});

export const FetchComment = (payload: comment):FetchCommentTypes => ({
    type: CommentActionsType.FETCH_COMMENT,
    payload
});

export const SetCommentLoading = (payload: LoadingState):SetCommentLoadingStateTypes => ({
    type: CommentActionsType.SET_LOADING_COMMENT,
    payload,
});

export const SetCommentLoaded = ():SetCommentLoadedStateTypes => ({
    type: CommentActionsType.SET_LOADED_COMMENT,
});
