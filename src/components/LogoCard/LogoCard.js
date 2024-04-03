import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { AvatarImage, LanguageSwitcher, ThemeSwitcher } from '../../components';
import css from './LogoCard.module.css';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "15px 2px 2px 2px",
        padding: "10px",
        width: "100%",
        color: theme.palette.text.contrastText,
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
    },
}));

export const LogoCard = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={`${classes.paper} ${css.logoCard}`}>
            {!isMobile && <AvatarImage avatarUrl={'images/move-maze-logo.png'} className={css.avatar} />}
            <Typography variant="h6" className={css.logoCardText}>
                грай-рушай
            </Typography>
            <div className={css.switchers}>


            </div>
        </div>
    );
};

