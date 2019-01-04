import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise";
import withRedux from "next-redux-wrapper";

import CombineReducers from "../reducers/CombineReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import Main from "../components/layout/Main";

import "../static/scss/app.scss";

const makeConfiguredStore = (reducer, initialState) => {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, promise))
    );
};

const makeStore = (initialState = {}, { isServer }) => {
    if (isServer) {
        return makeConfiguredStore(CombineReducers, initialState);
    } else {
        const persistConfig = {
            key: "restaurant",
            whitelist: ["order"],
            storage
        };

        const persistedReducer = persistReducer(persistConfig, CombineReducers);
        const store = makeConfiguredStore(persistedReducer, initialState);
        store.__persistor = persistStore(store);

        return store;
    }
};

export default withRedux(makeStore)(Main);
