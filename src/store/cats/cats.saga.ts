import {
  all,
  call,
  put,
  SagaReturnType,
  takeLatest,
} from "@redux-saga/core/effects";

import { getCatsData } from "../../services/cat.service";
import {
  failedFetching,
  startFetching,
  successFetching,
} from "../loading/loading.slice";
import { fetchCats, fetchCatsSuccess } from "./cats.slice";

export function* onFetchCats() {
  yield put(startFetching(fetchCats.type));

  try {
    const res: SagaReturnType<typeof getCatsData> = yield getCatsData();
    // const cats = Object.keys(res.data[0]);
    const cats = res.data.map((cat: any) => { return cat.name });

    yield put(fetchCatsSuccess(cats));
    yield put(successFetching(fetchCats.type));
  } catch (error: any) {
    yield put(
      failedFetching({ name: fetchCats.type, error: error?.message as string })
    );
  }
}

export function* onFetchCatsStart() {
  yield takeLatest(fetchCats.type, onFetchCats);
}

export default function* catsSaga() {
  yield all([call(onFetchCatsStart)]);
}
