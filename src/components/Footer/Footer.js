import React from "react";

import {Typography} from "@mui/material";

import style from "./Footer.module.css";


const Footer = (props) => {

    return (
        <div className={style.mainContainer}>
            <Typography color="secondary">
                Last updated on {props.timestamp}
            </Typography>

        </div>
    );
}

export default Footer;