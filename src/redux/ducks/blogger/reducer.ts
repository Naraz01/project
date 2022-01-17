import {BloggerActionsType, CompanyActions} from "./contracts/actionTypes";
import {LoadingState, bloggerState} from "./contracts/state";

const initialNewsState: bloggerState = {
    data: undefined,
    articles: undefined,
    loadingState: LoadingState.NEVER
};

export const bloggerReducer = (state = initialNewsState, action: CompanyActions) => {
    switch (action.type) {
        case (BloggerActionsType.SET_BLOGGER) : {
           return {
            ...state, data: action.payload, loadingState: LoadingState.LOADED
            };
        }
        case (BloggerActionsType.FETCH_BLOGGER) : {
            return {
                ...state, data: [], loadingState: LoadingState.LOADING
            };
        }
        case (BloggerActionsType.SET_LOADING_BLOGGER) : {
            return {
            ...state, loadingState: action.payload
            };
        }
        case (BloggerActionsType.SET_ARTICLES): {
            return  {
                ...state, articles: action.payload
            }
        };
        default : {
            return state
        }
    }
};
