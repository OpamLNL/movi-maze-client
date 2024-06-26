import React, { useContext } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import { LanguageContext } from "../language/language-context";
import homePageLocales from './Locales/homePageLocales.json';
import { NewsList } from "../components/NewsList/NewsList";


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
        marginTop: theme.spacing(10),
        textAlign: 'center',
    },
    button: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1, 4),
        fontSize: '1.2rem',
    },
}));

export const HomePage = () => {
    const classes = useStyles();
    const language = useContext(LanguageContext);

    return (
        <Container className={classes.container}>
            <Typography variant="h1" className={classes.title}>

                {`${homePageLocales.find(item => item.hasOwnProperty('welcome'))?.welcome[language.language] || ''}`}

            </Typography>

            <Typography variant="body1" className={classes.description}>

                {`${homePageLocales.find(item => item.hasOwnProperty('subtitle'))?.subtitle[language.language] || ''}`}

            </Typography>

            <Button variant="contained" color="primary" className={classes.button}>
                {`${homePageLocales.find(item => item.hasOwnProperty('startButton'))?.startButton[language.language] || ''}`}
            </Button>
            <NewsList />
        </Container>
    );
};

