import { all } from "redux-saga/effects";
import Saga1 from "../containers/module1/saga/saga1";

export default function* rootSaga() {
  yield all([Saga1()]);
}
