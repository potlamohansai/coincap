const { default: createSagaMiddleware } = require("@redux-saga/core");
const { createStore, applyMiddleware } = require("redux");
import fetchData from "./actions";
import reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchData);