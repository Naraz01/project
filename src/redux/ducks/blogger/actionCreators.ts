import {
    BloggerActionsType,
    FetchBloggerTypes,
    SetArticlesTypes,
    SetBloggerLoadingStateTypes,
    SetBloggerTypes
} from "./contracts/actionTypes";
import {bloggerState, LoadingState} from "./contracts/state";

export const SetBlogger = (payload: bloggerState | any):SetBloggerTypes => ({
    type: BloggerActionsType.SET_BLOGGER,
    payload,
});

export const SetArticles = (payload: any):SetArticlesTypes => ({
    type: BloggerActionsType.SET_ARTICLES,
    payload,
});

export const FetchBlogger = (payload: string):FetchBloggerTypes => ({
    type: BloggerActionsType.FETCH_BLOGGER,
    payload
});

export const SetBloggerLoading = (payload: LoadingState):SetBloggerLoadingStateTypes => ({
    type: BloggerActionsType.SET_LOADING_BLOGGER,
    payload,
});
