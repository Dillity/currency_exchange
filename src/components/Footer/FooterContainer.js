import React from "react";
import {connect} from "react-redux";

import Footer from "./Footer";
import {getTimestamp} from "../../selectors/selectors";


const FooterContainerComponent = (props) => {
    return (
        props.timestamp &&
        <Footer {...props} />
    );
}


let mapStateToProps = (state) => {
    return {
        timestamp: getTimestamp(state)
    }
}

export const FooterContainer = connect(mapStateToProps, null)(FooterContainerComponent)