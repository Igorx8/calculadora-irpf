import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import persistedReducers from './modules/reduxPersist';
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: persistedReducers(rootReducer),
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;