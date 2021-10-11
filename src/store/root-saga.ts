import { all, call } from "redux-saga/effects";

import petsSaga from "./pets/pets.saga";
import catsSaga from "./cats/cats.saga";

export default function* rootSaga() {
  yield all([call(petsSaga), call(catsSaga)]);
}
