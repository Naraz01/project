import { all } from 'redux-saga/effects';
import { articlesSaga } from './ducks/articles/sagas';
import { bloggerSaga } from './ducks/blogger/sagas';
import { commentSaga } from './ducks/comment/sagas';
import { newsSaga } from './ducks/news/sagas';
import { personSaga } from './ducks/person/sagas';
import { userSaga } from './ducks/user/sagas';

export default function* rootSaga() {
    yield all([
        newsSaga(),
        personSaga(),
        bloggerSaga(),
        articlesSaga(),
        userSaga(),
        commentSaga(),
    ]);
}
