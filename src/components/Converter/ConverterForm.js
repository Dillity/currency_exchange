import React from "react";

import {FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField} from "@mui/material";

import style from "./Converter.module.css";


const ConverterForm = (props) => {

    const currencies = Object.keys(props.rates);

    return (
        <div>
            <FormControl>
                <InputLabel>{props.label}</InputLabel>
                <Select
                    className={style.select}
                    value={props.selectedCurrency}
                    label={props.label}
                    onChange={(e) => props.onChangeCurrency(e.target.value)}
                >
                    {currencies.map(currency => <MenuItem key={currency} value={currency}>{currency}</MenuItem>)}
                </Select>
            </FormControl>
            <TextField helperText="Enter the amount you want to exchange"
                       className={style.input}
                       value={props.amount}
                       type="number"
                       onChange={(e) => props.onChangeAmount(e.target.value)}
                       InputProps={{
                           startAdornment: <InputAdornment
                               position="start">{props.selectedCurrency === "UAH" ? '♥' : '☆'}</InputAdornment>
                       }}
            />
        </div>
    );
}

export default ConverterForm;