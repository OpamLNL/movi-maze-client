import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
       height: "100%",
        margin: "3px",
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

export const RoundButton = React.forwardRef(({ onClick, children, className, ...rest }, ref) => {
    const classes = useStyles();

    return (
        <button ref={ref} onClick={onClick} className={`${classes.button} ${className}`} {...rest}>
            {children}
        </button>
    );
});

