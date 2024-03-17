import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../store/reducers/games/gamesActions';
import { selectGames, selectGamesLoading, selectGamesError } from '../../store/reducers/games/gamesSelectors';
import {GameListItem} from "../ListItems";

const GameList = () => {
    const dispatch = useDispatch();
    const games = useSelector(selectGames);
    const loading = useSelector(selectGamesLoading);
    const error = useSelector(selectGamesError);

    useEffect(() => {
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
            <ul>
                {sortedGames && sortedGames.map((game) => (
                    <GameListItem key={game.id}>
                        {game.title} - {game.developer}
                    </GameListItem>
                ))}
            </ul>
        </div>
    );
};

export { GameList };
