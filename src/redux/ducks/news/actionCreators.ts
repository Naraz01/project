import {DeleteArticleState, LoadingState, NewsState} from "./contracts/state";
import {
    AddNewsLoadedTypes,
    AddNewsTypes,
    DeleteArticleLoadedTypes,
    DeleteArticleLoadingStateTypes,
    DeleteArticleTypes,
    EditLikeArticlesTypes,
    EditPreservedTypes,
    FetchAddNewsTypes,
    FetchDeleteArticleTypes,
    FetchNewsTypes,
    NewsActionsType,
    SetNewsLoadingStateTypes,
    SetNewsStateTypes,
    SetNewsTypes,
    AddCommentNewsTypes
} from './contracts/actionTypes'

/* comment */

export const  AddCommentNews = (payload:any):AddCommentNewsTypes => ({
    type: NewsActionsType.ADD_COMMENT_NEWS,
    payload
});

/* Delete Article */
export const FetchDeleteArticle = (payload:number):FetchDeleteArticleTypes => ({
    type: NewsActionsType.FETCH_DELETE_ARTICLE,
    payload
});

export const DeleteArticle = (payload:any):DeleteArticleTypes => ({
    type: NewsActionsType.DELETE_ARTICLE,
    payload
});

export const DeleteArticleLoaded = ():DeleteArticleLoadedTypes => ({
    type: NewsActionsType.DELETE_ARTICLE_LOADED,
});
export const DeleteArticleLoadingState = (payload: DeleteArticleState): DeleteArticleLoadingStateTypes => ({
   type: NewsActionsType.DELETE_ARTICLE_LOADING_STATE,
   payload,
});



export const AddNewsLoaded = ():AddNewsLoadedTypes => ({
    type: NewsActionsType.ADD_NEWS_LOADED,
});

export const EditPreserved = (payload:any):EditPreservedTypes => ({
    type: NewsActionsType.EDIT_PRESERVED,
    payload
});

export const EditLikeArticles = (payload:any):EditLikeArticlesTypes => ({
    type: NewsActionsType.EDIT_LIKES_ARTICLES,
    payload
});

export const SetNews = (payload: NewsState):SetNewsTypes => ({
    type: NewsActionsType.SET_NEWS,
    payload
});

export const FetchNews = ():FetchNewsTypes => ({
    type: NewsActionsType.FETCH_NEWS
});

export const SetNewsLoadingState = (payload: LoadingState):SetNewsLoadingStateTypes => ({
    type: NewsActionsType.SET_LOADING_STATE,
    payload
});

export const FetchAddNews = (payload: any): FetchAddNewsTypes => ({
    type: NewsActionsType.FETCH_ADD_NEWS,
    payload,
});

export const AddNews = (payload: any):AddNewsTypes => ({
    type: NewsActionsType.ADD_NEWS,
    payload
});

export const SetNewsState = (payload: any): SetNewsStateTypes => ({
   type: NewsActionsType.SET_NEWS_STATE,
   payload,
});


