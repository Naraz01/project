import { call, takeLatest, put } from "@redux-saga/core/effects";
import {
    SetUser,
    SetUserLoading,
    SetUserNewsLike,
    SetUserNewsLikeLoadingState,
    SetUserNewsSave,
    SetUserNewsSaveLoadingState
} from "./actionCreators";
import {LikeLoadingState, LoadingState, SaveLoadingState} from "./contracts/state";
import {UserActionsType} from "./contracts/actionTypes";
import { UserApi } from "../../../services/api/userApi";
import {EditLikeArticles, EditPreserved } from "../news/actionCreators";
import {EditLikeArticle, EditPreservedArticle } from "../articles/actionCreators";

export function* fetchUserRequest({payload: id}:any):any {
    try {
        const data = yield call(UserApi.fetchPerson, id);
        yield put(SetUser(data));
    }
    catch (error) {
        yield put(SetUserLoading(LoadingState.ERROR))
    }
}

export function* fetchUserNewsSaveRequest(payload:any):any {
    try {
        yield call(UserApi.setNewsUser, payload.payload);
        yield put(SetUserNewsSave(payload.payload));
        yield put(EditPreserved(payload.payload));
        yield put(EditPreservedArticle(payload.payload))
    }
    catch (error) {
        yield put(SetUserNewsSaveLoadingState(SaveLoadingState.ERROR))
    }
}


export function* fetchUserNewsLikeRequest(payload:any):any {
    try {
        yield call(UserApi.setNewsUserLike, payload.payload);
        yield put(EditLikeArticles(payload.payload));
        yield put(SetUserNewsLike(payload.payload));
        yield put(EditLikeArticle(payload.payload))
    }
    catch (error) {
        yield put(SetUserNewsLikeLoadingState(LikeLoadingState.ERROR))
    }
}

export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_USER, fetchUserRequest);
    yield takeLatest(UserActionsType.FETCH_USER_NEWS_SAVE, fetchUserNewsSaveRequest);
    yield takeLatest(UserActionsType.FETCH_USER_NEWS_LIKE, fetchUserNewsLikeRequest);
}
