import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import {CssBaseline, ThemeProvider} from "@mui/material";

import App from './App';
import store from "./redux/store/store";
import {theme} from "./theme/theme";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <CssBaseline>
                <App/>
            </CssBaseline>
        </Provider>
    </ThemeProvider>
);


