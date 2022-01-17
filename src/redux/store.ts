import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import { rootReducer } from "./rootReducer";
import rootSaga from './saga'

import {NewsState} from './ducks/news/contracts/state'
import {personState} from "./ducks/person/contracts/state";
import {bloggerState} from "./ducks/blogger/contracts/state";
import {articlesState} from "./ducks/articles/contracts/state";
import {userState} from "./ducks/user/contracts/state";
import {commentState} from "./ducks/comment/contracts/state";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
    news: NewsState;
    person: personState;
    blogger: bloggerState;
    article: articlesState;
    user: userState;
    comment: commentState
};

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
