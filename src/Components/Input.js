import React, { useState } from 'react';
import {
    ThemeProvider,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    margin: {
        margin: theme.spacing(2),
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

export default function CustomizedInputs(props) {
    const classes = useStyles();

    const [value, setValue] = useState('');
    const { button, change } = props;

    return (
        <form className={classes.root} noValidate>
            <ThemeProvider theme={theme}>
                <TextField
                    size='small'
                    outline='none'
                    className={classes.margin}
                    label="Enter the name of a city"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    value={value}
                    autoComplete="off"
                    onChange={(e, value) => {
                        const myValue = e.target.value;
                        setValue(myValue);
                        change(e, myValue);
                        console.log(value);
                    }}
                />
            </ThemeProvider>
            <button onClick={(e) => {
                button(e);
                setValue('');
            }
            }><SearchIcon style={{ color: green[500] }} fontSize="large"/></button>
        </form>
    );
}
