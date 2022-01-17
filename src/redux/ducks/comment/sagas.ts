import { call, takeLatest, put } from "@redux-saga/core/effects";
import { SetComment, SetCommentLoading } from "./actionCreators";
import {LoadingState} from "./contracts/state";
import {CommentActionsType} from "./contracts/actionTypes";
import {CommentApi} from "../../../services/api/commentApi";
import { AddCommentArticle } from "../articles/actionCreators";
import { AddCommentNews } from "../news/actionCreators";

export function* fetchCommentRequest({payload}:any):any {
    try {
        const data = yield call(CommentApi.fetchComment, payload);
        yield put(SetComment(data));
        yield put(AddCommentArticle(data));
        yield put(AddCommentNews(data))
    }
    catch (error) {
        yield put(SetCommentLoading(LoadingState.ERROR))
    }
}

export function* commentSaga() {
    yield takeLatest(CommentActionsType.FETCH_COMMENT, fetchCommentRequest)
}
