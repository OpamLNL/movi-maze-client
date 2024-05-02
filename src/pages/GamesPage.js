import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './GamesPage.module.css';
import { selectGames } from '../store/reducers/games/gamesSelectors';
import { fetchGames } from '../store/reducers/games/gamesActions';
// import { LanguageContext } from '../language/language-context';
import { GameCard } from "../components";

export const GamesPage = () => {
    const dispatch = useDispatch();
    const games = useSelector(selectGames);
    // const language = useContext(LanguageContext);

    useEffect(() => {
        dispatch(fetchGames());
    }, [dispatch]);

    return (
        <div className={css.gamesListPage}>
            <div className={css.gamesListBlock}>
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    );
};

