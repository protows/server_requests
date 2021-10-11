import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./root-saga";

import counterReducer from "./counter/counter.slice";
import petsReducer from "./pets/pets.slice";
import loadingReducer from "./loading/loading.slice";
import catsReducer from "./cats/cats.slice";


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pets: petsReducer,
    loading: loadingReducer,
    cats: catsReducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
