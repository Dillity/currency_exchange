import {
    AMOUNT_FROM_CHANGE, AMOUNT_TO_CHANGE,
    CURRENCY_FROM_CHANGE,
    CURRENCY_TO_CHANGE,
    SET_ALL,
    SET_DEFAULT_CURRENCY,
    SET_RATES, SET_TIMESTAMP
} from "./currencyType";


let initialState = {
    allCurrenciesHeader: [],
    rates: [],
    currencyFrom: '',
    amountFrom: 0,
    currencyTo: '',
    amountTo: 0,
    timestamp: null
}

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL:
            return {
                ...state,
                allCurrenciesHeader: action.data
            }

        case SET_RATES:
            return {
                ...state,
                rates: action.rates
            }

        case SET_DEFAULT_CURRENCY:
            return {
                ...state,
                currencyFrom: action.data,
                currencyTo: action.data
            }

        case CURRENCY_FROM_CHANGE:
            return {
                ...state,
                currencyFrom: action.data
            }

        case CURRENCY_TO_CHANGE:
            return {
                ...state,
                currencyTo: action.data
            }

        case AMOUNT_FROM_CHANGE:
            return {
                ...state,
                amountFrom: action.data
            }

        case AMOUNT_TO_CHANGE:
            return {
                ...state,
                amountTo: action.data
            }

        case SET_TIMESTAMP:
            return {
                ...state,
                timestamp: action.data
            }

        default:
            return state;
    }
}





export default currencyReducer;
