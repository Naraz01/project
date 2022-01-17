import { call, takeLatest, put } from "@redux-saga/core/effects";
import {SetArticle, SetArticleLoading } from "./actionCreators";
import {LoadingState} from "./contracts/state";
import {ArticleActionsType} from "./contracts/actionTypes";
import { NewsApi } from "../../../services/api/newsApi";

export function* fetchArticlesRequest({payload: id}:any):any {
    try {
        const data = yield call(NewsApi.fetchArticle, id);
        yield put(SetArticle(data));
    }
    catch (error) {
        yield put(SetArticleLoading(LoadingState.ERROR))
    }
}

export function* articlesSaga() {
    yield takeLatest(ArticleActionsType.FETCH_ARTICLE, fetchArticlesRequest)
}
