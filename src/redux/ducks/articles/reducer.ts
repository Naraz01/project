import {ArticleActionsType, CompanyActions} from "./contracts/actionTypes";
import {LoadingState, articlesState} from "./contracts/state";

const initialNewsState: articlesState = {
    data: undefined,
    loadingState: LoadingState.NEVER
};

export const articleReducer = (state = initialNewsState, action: CompanyActions) => {
    switch (action.type) {
        case (ArticleActionsType.SET_ARTICLE) : {
           return {
            ...state, data: action.payload, loadingState: LoadingState.LOADED
            };
        }
        case (ArticleActionsType.FETCH_ARTICLE) : {
            return {
                ...state, data: [], loadingState: LoadingState.LOADING
            };
        }
        case (ArticleActionsType.SET_LOADING_ARTICLE) : {
            return {
            ...state, loadingState: action.payload
            };
        }
        case ArticleActionsType.EDIT_PRESERVED_ARTICLE: {
            let copyState = {...state.data};
            copyState.saved = action.payload.saved;
            return {...state, data: copyState};
        }
        case ArticleActionsType.EDIT_LIKE_ARTICLE: {
            let copyState = {...state.data};
            copyState.likes = action.payload.likes;
            return {...state, data: copyState};
        }
        case ArticleActionsType.ADD_COMMENT_ARTICLE: {
            if (state && state.data && state.data.comments) {
                let copyState = {...state};
                copyState.data = {...state.data};
                copyState.data.comments = [action.payload, ...state.data.comments];
                return copyState
            }
            console.log('123123');
            return { ...state }
        }
        default : {
            return state
        }
    }
};
