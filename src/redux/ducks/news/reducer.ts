import {NewsActions, NewsActionsType} from "./contracts/actionTypes";
import {AddNewsState, DeleteArticleState, LoadingState, News, NewsState} from "./contracts/state";

const initialNewsState: NewsState = {
    items: [],
    addNews: false,
    deleteArticle: false,
    addNewsState: AddNewsState.NEVER,
    loadingState: LoadingState.NEVER,
    deleteArticleState: DeleteArticleState.NEVER
};

export const newsReducer = (state = initialNewsState, action: NewsActions) => {
      switch (action.type) {
          case (NewsActionsType.SET_NEWS) : {
              return { ...state, items: action.payload, loadingState: LoadingState.LOADED };
           }
          case (NewsActionsType.FETCH_NEWS) : {
              return { ...state, items: [], loadingState: LoadingState.LOADING };
          }
          case (NewsActionsType.SET_LOADING_STATE) : {
              return { ...state,  loadingState: action.payload };
          }
          case NewsActionsType.EDIT_PRESERVED: {
              let copyState = {...state};

              let preserved = copyState.items.map((item:News, i:number) => {
                  if (item.id === action.payload.newsId) {
                      return {...item, saved: action.payload.saved}
                  }
                  return item
              });
              return {
                  ...state, items: preserved
              }
          }
          case NewsActionsType.EDIT_LIKES_ARTICLES: {
              let copyState = {...state};

              let likes = copyState.items.map((item:News) => {
                  if (item.id === action.payload.newsId) {
                      return {...item, likes: action.payload.likes}
                  }
                  return item
              });
              return {
                  ...state, items: likes
              }
          }
          case NewsActionsType.FETCH_ADD_NEWS: {
              return {
                  ...state, addNews: false, addNewsState: AddNewsState.LOADING
              }
          }
          case NewsActionsType.ADD_NEWS: {
              return {
                  ...state, items: [action.payload, ...state.items], addNews: true, addNewsState: AddNewsState.NEVER
              }
          }

          case NewsActionsType.SET_NEWS_STATE: {
              return {...state, addNews: false, addNewsState: action.payload}
          }

          case NewsActionsType.ADD_NEWS_LOADED: {
              return {...state, addNews: false}
          }


          /* delete article */
          case NewsActionsType.FETCH_DELETE_ARTICLE: {
                return {...state, deleteArticleState: DeleteArticleState.LOADING}
          }
          case NewsActionsType.DELETE_ARTICLE: {
              let deleteNews = state.items.filter((item:News) => {
                  return item.id !== action.payload
              });
              return {...state, items: deleteNews, deleteArticle: true, deleteArticleState: DeleteArticleState.LOADED}
          }

          case NewsActionsType.DELETE_ARTICLE_LOADED: {
              return {...state, deleteArticle: false, deleteArticleState: DeleteArticleState.NEVER}
          }

          case NewsActionsType.DELETE_ARTICLE_LOADING_STATE: {
              return {...state, deleteArticle: false, deleteArticleState: action.payload};
          }

          case NewsActionsType.ADD_COMMENT_NEWS: {
              let addComment = state.items.map((item:News) => {
                  if (item.id === action.payload.newsId) {
                      item.comments = [...item.comments, action.payload]
                  }
                  return item
              });
              console.log(addComment);
              return {...state}
          }

          default : {
              return state
          }
      }
};
