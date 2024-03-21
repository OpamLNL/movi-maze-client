import React, {useContext} from 'react';
import { Container, Typography, Button } from '@mui/material';
import {makeStyles} from "@material-ui/core/styles";
import {LanguageContext} from "../language/language-context";
import HomePageLocales from './homePageLocales';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    },
    title: {
        fontSize: '3rem',
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.primary.contrastText,
    },
    description: {
        fontSize: '1.5rem',
        marginBottom: theme.spacing(4),
        textAlign: 'center',
    },
    button: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1, 4),
        fontSize: '1.2rem',
    },
}));

const LandingPage = () => {
    const classes = useStyles();
    const language = useContext(LanguageContext);

    return (
        <Container className={classes.container}>
            <Typography variant="h1" className={classes.title}>
                {HomePageLocales.welcome[language.language]}
                Welcome to Mobile Games World
            </Typography>
            <Typography variant="body1" className={classes.description}>
                Explore a world of exciting mobile games and start playing now!
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
                Get Started
            </Button>
        </Container>
    );
};

export default LandingPage;
