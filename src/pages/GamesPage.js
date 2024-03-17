import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './GamesPage.module.css';
import { selectGames } from '../store/reducers/games/gamesSelectors';
import { fetchGames } from '../store/reducers/games/gamesActions';
import { LanguageContext } from '../language/language-context';
import {store} from "../store/store";
import {GameCard} from "../components";

const GamesPage = () => {
    const dispatch = useDispatch();
    const games = useSelector(selectGames);
    const language = React.useContext(LanguageContext);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const result = await dispatch(fetchGames());
    //             console.log('Games fetched successfully in gamepage:', result);
    //
    //             // Вивести games в консоль після отримання даних
    //             console.log('Games in state:', selectGames(store.getState()));
    //         } catch (error) {
    //             console.error('Error fetching games:', error);
    //         }
    //     };
    //
    //     fetchData();
    // }, [dispatch]);




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

export { GamesPage };
