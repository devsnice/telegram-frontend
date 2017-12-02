import { put, takeEvery } from 'redux-saga/effects';
import { ACTIONS } from './reducer';

function* attemptAuth(action) {
  alert('Auth');
  yield put({ type: ACTIONS.AUTH_SUCCESS });
}

function* authSaga() {
  yield takeEvery(ACTIONS.AUTH_ATTEMPT, attemptAuth);
}

export default authSaga;
