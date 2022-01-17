import { combineReducers } from "redux";
import { articleReducer } from "./ducks/articles/reducer";
import { bloggerReducer } from "./ducks/blogger/reducer";
import { newsReducer } from './ducks/news/reducer'
import { personReducer } from "./ducks/person/reducer";
import { userReducer } from "./ducks/user/reducer"
import {commentReducer} from "./ducks/comment/reducer";

export const rootReducer = combineReducers({
    news: newsReducer,
    person: personReducer,
    blogger: bloggerReducer,
    article: articleReducer,
    user: userReducer,
    comment: commentReducer
});
