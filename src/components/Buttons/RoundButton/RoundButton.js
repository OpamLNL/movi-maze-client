import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
        background: theme.palette.primary.contrastText,
        '&:hover': {
            background: '#ddd',
        },
    }
}));

export const RoundButton = ({ onClick, children, className }) => {
    const classes = useStyles();

    return (
        <button onClick={onClick} className={`${classes.button} ${className}`}>
            {children}
        </button>
    );
};

