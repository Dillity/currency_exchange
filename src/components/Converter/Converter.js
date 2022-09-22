import React from "react";

import {IconButton} from "@mui/material";

import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

import ConverterForm from "./ConverterForm";

import style from "./Converter.module.css";


const Converter = (props) => {

    const onAmountFromChange = (amount) => {
        props.setAmountTo((amount * props.rates[props.currencyTo] / props.rates[props.currencyFrom]).toFixed(2));
        props.setAmountFrom(amount);
    }
    const onCurrencyFromChange = (currency) => {
        props.setAmountTo((props.amountFrom * props.rates[props.currencyTo] / props.rates[currency]).toFixed(2));
        props.setCurrencyFrom(currency);
    }

    const onAmountToChange = (amount) => {
        props.setAmountFrom((amount * props.rates[props.currencyFrom] / props.rates[props.currencyTo]).toFixed(2));
        props.setAmountTo(amount);
    }
    const onCurrencyToChange = (currency) => {
        props.setAmountFrom((props.amountTo * props.rates[props.currencyFrom] / props.rates[currency]).toFixed(2));
        props.setCurrencyTo(currency);
    }


    return (
        <div className={style.mainContainer}>
            <div className={style.form}>
                <ConverterForm {...props} selectedCurrency={props.currencyFrom} amount={props.amountFrom}
                               onChangeAmount={onAmountFromChange}
                               onChangeCurrency={onCurrencyFromChange} label="From"/>

            </div>

            <div className={style.form}>
                <IconButton disabled={true}>
                    <SwapHorizIcon/>
                </IconButton>
            </div>

            <div className={style.form}>
                <ConverterForm {...props} selectedCurrency={props.currencyTo} amount={props.amountTo}
                               onChangeAmount={onAmountToChange}
                               onChangeCurrency={onCurrencyToChange} label="To"/>
            </div>

        </div>
    )
}

export default Converter;