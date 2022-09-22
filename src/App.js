import React from "react";

import {HeaderContainer} from "./components/Header/HeaderContainer";
import {ConverterContainer} from "./components/Converter/ConverterContainer";
import {FooterContainer} from "./components/Footer/FooterContainer";




const App = () => {
    return (
        <div>
            <HeaderContainer />
            <ConverterContainer />
            <FooterContainer />
        </div>
    );
}

export default App;
