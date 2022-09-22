import React, {useEffect} from "react";
import {connect} from "react-redux";

import {getAllCurrenciesRate} from "../../selectors/selectors";
import {getAllCurrencies} from "../../redux/currency/currencyAction";

import Header from "./Header";


const HeaderContainerComponent = (props) => {

    useEffect(() => {
        props.getAllCurrencies();
    }, [])

    return (
            props.allCurrencies.length > 0 &&
                <Header {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        allCurrencies: getAllCurrenciesRate(state)
    }
}




export const HeaderContainer = connect(mapStateToProps, {getAllCurrencies})(HeaderContainerComponent);