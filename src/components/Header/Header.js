import React from "react";
import {Container, Grid, Typography} from "@mui/material";

import SingleCurrencyItem from "./SingleCurrencyItem/SingleCurrencyItem";

import style from "./Header.module.css";


const Header = (props) => {

    return (
        <div className={style.mainContainer}>
            <Container className={style.container}>
                <Grid container>

                    <Grid item flexGrow={1}>
                        <Typography component="span" color="secondary">
                            <h2>Currency exchange rate</h2>
                        </Typography>
                    </Grid>

                    {props.allCurrencies.map(currency => <SingleCurrencyItem key={currency.buy} name={currency.ccy} buy={currency.buy} sell={currency.sale} />)}

                </Grid>
            </Container>
        </div>
    )
}

export default Header;