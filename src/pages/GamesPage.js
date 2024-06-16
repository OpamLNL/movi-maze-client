import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGames} from "../store/reducers/games/gamesActions";
import { GameCard } from "../components";
import css from "./GamesPage.module.css";
import {selectGames} from "../store/reducers/games/gamesSelectors";



export const GamesPage = () => {
    const dispatch = useDispatch();
    const games = useSelector(selectGames);

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
