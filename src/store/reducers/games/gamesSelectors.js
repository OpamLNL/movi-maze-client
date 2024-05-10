// Selectors for accessing game data from the Redux store

// Селектор для отримання всіх ігор
export const selectGames = (state) => state.games.games;

// Селектор для отримання стану завантаження ігор
export const selectGamesLoading = (state) => state.games.loading;

// Селектор для отримання помилок при завантаженні ігор
export const selectGamesError = (state) => state.games.error;

// Селектор для пошуку гри за ID
export const selectGameById = (state, gameId) =>
    state.games.games.find(game => game.id === gameId);

// Селектор для пошуку ігор за заданим пошуковим терміном
export const searchGames = (state, searchTerm) =>
    state.games.games.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
