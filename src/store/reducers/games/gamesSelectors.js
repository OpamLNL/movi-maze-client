export const selectGames = (state) => state.games.games;
export const selectGamesLoading = (state) => state.games.loading;
export const selectGamesError = (state) => state.games.error;

export const selectGameById = (state, gameId) =>
    state.games.games.find(game => game.id === gameId);

export const searchGames = (state, searchTerm) =>
    state.games.games.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
