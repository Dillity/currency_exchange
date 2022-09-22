import React, {useState} from "react";

import {Badge, Button, Grid, Menu, MenuItem, Tooltip, Typography} from "@mui/material";

import style from "../Header.module.css";


const SingleCurrencyItem = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCopy = (value) => {
        navigator.clipboard.writeText(value);
    }

    return (
        <Grid item>
            <Badge variant="dot" color={props.name === "RUR" ? "warning" : "secondary"}>
                <Button onClick={handleOpen} className={style.item} color="secondary">
                    {props.name}
                </Button>
            </Badge>
            {props.name === "RUR" ? null :
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem>
                        <Tooltip title="Click to copy" arrow>
                            <Typography onClick={() => {handleCopy(props.buy)}}>
                                Buy: {props.buy}
                            </Typography>
                        </Tooltip>
                    </MenuItem>
                    <MenuItem>
                        <Tooltip title="Click to copy" arrow>
                            <Typography onClick={() => {handleCopy(props.sell)}}>
                                Sell: {props.sell}
                            </Typography>
                        </Tooltip>
                    </MenuItem>
                </Menu>
            }
        </Grid>
    );
}

export default SingleCurrencyItem;