export const getAllCurrenciesRate = (state) => {
    return state.currency.allCurrenciesHeader
}
export const getRates = (state) => {
    return state.currency.rates
}
export const getCurrencyFrom = (state) => {
    return state.currency.currencyFrom
}
export const getAmountFrom = (state) => {
    return state.currency.amountFrom
}
export const getCurrencyTo = (state) => {
    return state.currency.currencyTo
}
export const getAmountTo = (state) => {
    return state.currency.amountTo
}
export const getTimestamp = (state) => {
    return state.currency.timestamp
}