import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../store/reducers/games/gamesActions';
import { selectGames, selectGamesLoading, selectGamesError } from '../../store/reducers/games/gamesSelectors';

const GameList = () => {
    const dispatch = useDispatch();
    const games = useSelector(selectGames);
    const loading = useSelector(selectGamesLoading);
    const error = useSelector(selectGamesError);

    useEffect(() => {
        // Викликайте action creator для отримання списку ігор при завантаженні компонента
        dispatch(fetchGames());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const sortedGames = [...games].sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div>
            <h2>Game List</h2>
            <ul>
                {sortedGames && sortedGames.map((game) => (
                    <li key={game.id}>{game.title} - {game.developer}</li>
                ))}
            </ul>
        </div>
    );
};

export { GameList };
