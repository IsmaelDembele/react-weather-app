import React, { useState } from 'react';
import {
    ThemeProvider,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));


const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

export default function CustomizedInputs(props) {
    const [value, setValue] = useState('');
    const classes = useStyles();
    const { button, change } = props;

    return (
        <form className={classes.root} noValidate>
            <ThemeProvider theme={theme}>
                <TextField
                    className={classes.margin}
                    label="Enter the name of a city"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    value={value}
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
            }>ClickMe</button>
        </form>
    );
}
