import { call, takeLatest, put } from "@redux-saga/core/effects";
import {SetPerson, SetPersonLoading } from "./actionCreators";
import {LoadingState} from "./contracts/state";
import {PersonActionsType} from "./contracts/actionTypes";
import {PersonApi} from "../../../services/api/personApi";

export function* fetchPersonRequest():any {
    try {
        const items = yield call(PersonApi.fetchPerson);
        yield put(SetPerson(items));
    }
    catch (error) {
        yield put(SetPersonLoading(LoadingState.ERROR))
    }
}

export function* personSaga() {
    yield takeLatest(PersonActionsType.FETCH_PERSON, fetchPersonRequest)
}
