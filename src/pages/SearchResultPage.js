import {useState, useEffect, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, CircularProgress } from '@mui/material';
import { GameCard} from '../components';

import {LanguageContext} from "../language/language-context";
import {selectGames} from "../store/reducers/games/gamesSelectors";

const useStyles = makeStyles((theme) => ({
    searchResultContainer: {
        maxWidth: '800px',
        padding: theme.spacing(4),
        margin: 'auto',
        // backgroundColor: theme.palette.primary.dark,
        color: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius,
        // boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'row',
        gap: theme.spacing(2),
        alignItems: 'center',
    },
}));

export const SearchResultPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { searchKey } = useParams();
    const [loading, setLoading] = useState(true);
    const language = useContext(LanguageContext);
    const games = useSelector(selectGames);

    useEffect(() => {
        setLoading(false);
    }, [dispatch]);

    if (loading) {
        return (
            <Container>
                <CircularProgress color="secondary" />
            </Container>
        );
    }



    const filteredGames = games
        .filter(game => game.description.toLowerCase().includes(searchKey.toLowerCase()))
        .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div>
                <Typography variant="h5" gutterBottom>
                    {language.language === 'uk-UA' ? 'Шукаємо: ' : 'Search: '}{searchKey}
                </Typography>

                <div className={classes.searchResultContainer}>
                    {filteredGames.map((game) => (
                        <Link to={`/gamePage/${game.id}`} key={game.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <GameCard game={game} />
                        </Link>
                    ))}
                </div>

        </div>

    );
};