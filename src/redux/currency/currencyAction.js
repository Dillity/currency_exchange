import {
    AMOUNT_FROM_CHANGE, AMOUNT_TO_CHANGE,
    CURRENCY_FROM_CHANGE,
    CURRENCY_TO_CHANGE,
    SET_ALL,
    SET_DEFAULT_CURRENCY,
    SET_RATES, SET_TIMESTAMP
} from "./currencyType";
import {currencyAPI} from "../../api/api";

export const setAll = (data) => ({type: SET_ALL, data});
export const setRates = (rates) => ({type: SET_RATES, rates});
export const setDefaultCurrency = (data) => ({type: SET_DEFAULT_CURRENCY, data});
export const setCurrencyFrom = (data) => ({type: CURRENCY_FROM_CHANGE, data});
export const setCurrencyTo = (data) => ({type: CURRENCY_TO_CHANGE, data});
export const setAmountFrom = (data) => ({type: AMOUNT_FROM_CHANGE, data});
export const setAmountTo = (data) => ({type: AMOUNT_TO_CHANGE, data});
export const setTimestamp = (data) => ({type: SET_TIMESTAMP, data});



export const getCurrencyRates = () => (dispatch) => {
    currencyAPI.convert().then(response => {
        if (response.data.success) {
            dispatch(setRates(response.data.rates));
            dispatch(setTimestamp(response.data.date));
        }
    });
}

export const getAllCurrencies = () => (dispatch) => {
    currencyAPI.currency().then(response => {
        if (response.status === 200) {
            dispatch(setAll(response.data));
        }
    });
}
