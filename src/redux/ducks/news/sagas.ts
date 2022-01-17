import { call, takeLatest, put } from "@redux-saga/core/effects";
import {NewsApi} from '../../../services/api/newsApi';
import {AddNews, AddNewsLoaded, DeleteArticle,
    DeleteArticleLoaded, DeleteArticleLoadingState, SetNews, SetNewsLoadingState, SetNewsState } from "./actionCreators";
import {AddNewsState, DeleteArticleState, LoadingState} from "./contracts/state";
import {NewsActionsType} from "./contracts/actionTypes";
import { AddUserArticle, DeleteUserArticle } from "../user/actionCreators";

export function* fetchNewsRequest():any {
    try {
        const items = yield call(NewsApi.fetchNews);
        yield put(SetNews(items));
    }
    catch (error) {
        yield put(SetNewsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddNewsRequest(payload:any):any {
    try {
        const item = yield call(NewsApi.addNews, payload);
        yield put(AddNews(item));
        yield put(AddNewsLoaded());
        yield put(AddUserArticle(item))
    }
    catch (error) {
        yield put(SetNewsState(AddNewsState.ERROR))
    }
}

export function* fetchDeleteArticleRequest(payload:any):any {
    try {
        yield call(NewsApi.deleteArticle, payload.payload);
        yield put(DeleteArticle(payload.payload));
        yield put(DeleteArticleLoaded());
        yield put(DeleteUserArticle(payload.payload))
    }
    catch (error) {
        yield put(DeleteArticleLoadingState(DeleteArticleState.ERROR))
    }
}

export function* newsSaga() {
    yield takeLatest(NewsActionsType.FETCH_NEWS, fetchNewsRequest);
    yield takeLatest(NewsActionsType.FETCH_ADD_NEWS, fetchAddNewsRequest);
    yield takeLatest(NewsActionsType.FETCH_DELETE_ARTICLE, fetchDeleteArticleRequest);
}
