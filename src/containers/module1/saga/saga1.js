import { all, put, takeLatest } from "redux-saga/effects";

function* Function1(action) {
  yield put({
    type: "FETCH_BATCHS_SAGA",
    payload: action.payload,
    total: action.total,
  });
}

function* WatchFunction1() {
  yield takeLatest("FETCH_BATCHES", Function1);
}

export default function* Saga1() {
  yield all([WatchFunction1()]);
}
