import { call, takeLatest, put } from "@redux-saga/core/effects";
import {SetBlogger, SetBloggerLoading } from "./actionCreators";
import {LoadingState} from "./contracts/state";
import {BloggerActionsType} from "./contracts/actionTypes";
import { BloggerApi } from "../../../services/api/bloggerApi";

export function* fetchCompanyRequest({payload: id}:any):any {
    try {
        const data = yield call(BloggerApi.fetchBlogger, id);
        yield put(SetBlogger(data));
    }
    catch (error) {
        yield put(SetBloggerLoading(LoadingState.ERROR))
    }
}

export function* bloggerSaga() {
    yield takeLatest(BloggerActionsType.FETCH_BLOGGER, fetchCompanyRequest)
}
