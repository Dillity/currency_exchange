import React, {useEffect} from "react";
import {connect} from "react-redux";


import {getAmountFrom, getAmountTo, getCurrencyFrom, getCurrencyTo, getRates} from "../../selectors/selectors";
import {
    getCurrencyRates,
    setAmountFrom,
    setAmountTo,
    setCurrencyFrom,
    setCurrencyTo
} from "../../redux/currency/currencyAction";

import Converter from "./Converter";



const ConverterContainerComponent = (props) => {

    useEffect(() => {
        props.getCurrencyRates();
    }, []);


    return (
        <Converter {...props} />
    )
}

let mapStatToProps = (state) => {
    return {
        rates: getRates(state),
        currencyFrom: getCurrencyFrom(state),
        amountFrom: getAmountFrom(state),
        currencyTo: getCurrencyTo(state),
        amountTo: getAmountTo(state)
    }
}


export const ConverterContainer = connect(mapStatToProps, {getCurrencyRates, setCurrencyFrom, setCurrencyTo, setAmountFrom, setAmountTo})(ConverterContainerComponent);