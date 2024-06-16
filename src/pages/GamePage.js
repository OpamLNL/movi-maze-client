import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, CircularProgress, Container, Box, Paper } from '@mui/material';

import { fetchGameById } from "../store/reducers/games/gamesActions";
import { apiBaseURL, postersURL } from "../configs/urls";
import { ContrastContainer } from "../components";

const IMG_API = apiBaseURL + postersURL;

const useStyles = makeStyles((theme) => ({
    gameContainer: {
        maxWidth: '600px',
        padding: theme.spacing(4),
        margin: 'auto',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        alignItems: 'center',
    },
    gamePoster: {
        width: '100%',
        height: 'auto',
        borderRadius: theme.shape.borderRadius,
    },
    gameLabel: {
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.text.secondary,
    },
    gameValue: {
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.text.primary,
    },
}));

export const GamePage = () => {
    const { id } = useParams();

    const gameId = id;
    const classes = useStyles();
    const dispatch = useDispatch();
    const gameData = useSelector(state => state.games.currentGame);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (gameId) {
            dispatch(fetchGameById(gameId))
                .then(() => setLoading(false))
                .catch((error) => {
                    console.error('Error fetching game data:', error);
                    setLoading(false);
                });
        }
    }, [gameId, dispatch]);

    localStorage.setItem('user', 'Menny');

    if (loading) {
        return (
            <Container>
                <CircularProgress color="secondary" />
            </Container>
        );
    }

    return (
        <ContrastContainer className={classes.gameContainer} elevation={0}>
            <Typography variant="h5" gutterBottom>{gameData[0].title}</Typography>
            <img src={IMG_API + gameData[0].poster_url} alt="Game Poster" className={classes.gamePoster} />
            <Box>
                <Typography className={classes.gameLabel}>Developer:</Typography>
                <Typography>{gameData[0].developer}</Typography>
                <Typography className={classes.gameLabel}>Release Year:</Typography>
                <Typography>{gameData[0].release_year}</Typography>
                <Typography className={classes.gameLabel}>Rating:</Typography>
                <Typography>{gameData[0].rating}</Typography>
                <Typography className={classes.gameLabel}>Description:</Typography>
                <Typography>{gameData[0].description}</Typography>
                <Typography className={classes.gameLabel}>Platforms:</Typography>
                <Typography>{gameData[0].platforms}</Typography>
                <Typography className={classes.gameLabel}>Price:</Typography>
                <Typography>{gameData.price ? `$${gameData.price.toFixed(2)}` : 'Free'}</Typography>
                <Typography className={classes.gameLabel}>More Info:</Typography>
                <Typography>{gameData[0].link && <a href={gameData.link}>Click here</a>}</Typography>
            </Box>
        </ContrastContainer>
    );
};
