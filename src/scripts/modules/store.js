import { createStore } from 'redux';
import { reducer, initialState } from "./app";

const enhancer = process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || undefined;

export default createStore(
    reducer,
    initialState,
    enhancer,
);
