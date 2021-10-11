import {
  all,
  call,
  put,
  SagaReturnType,
  takeLatest,
} from "@redux-saga/core/effects";

import { getAllBreeds } from "../../services/dog.service";
import {
  failedFetching,
  startFetching,
  successFetching,
} from "../loading/loading.slice";
import { fetchDogs, fetchDogsSuccess } from "./pets.slice";

export function* onFetchDogs() {
  yield put(startFetching(fetchDogs.type));

  try {
    const res: SagaReturnType<typeof getAllBreeds> = yield getAllBreeds();
    const breeds = Object.keys(res.data.message);

    yield put(fetchDogsSuccess(breeds));
    yield put(successFetching(fetchDogs.type));
  } catch (error: any) {
    yield put(
      failedFetching({ name: fetchDogs.type, error: error?.message as string })
    );
  }
}

export function* onFetchDogsStart() {
  yield takeLatest(fetchDogs.type, onFetchDogs);
}

export default function* petsSaga() {
  yield all([call(onFetchDogsStart)]);
}
