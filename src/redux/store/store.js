import {applyMiddleware, combineReducers, createStore} from "redux";
import currencyReducer from "../currency/currencyReducer";
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    currency: currencyReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;
