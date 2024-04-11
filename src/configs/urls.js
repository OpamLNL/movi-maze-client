const API_KEY = "c4afbfa3afc24cd4799e5c009de0e848";

const baseURL = 'https://api.themoviedb.org'
const apiBaseURL = 'http://localhost:5000';
const postersURL = '/images/posters/';
const newsImagesURL = '/images/newsImages/';

const urls = {
    genres: '/3/genre/movie/list?',
    movies: '/3/discover/movie?',
    videos: '/3/movie/157336/videos',
    nowPlaying: '/movie/now_playing',
    popular: '/movie/popular',
    topRated: '/movie/top_rated',
    upcoming: '/movie/upcoming',

    users: {
        all: '/api/users/getAll',
        active: '/api/users/active',
        create: '/api/users-create/post',
    },
    games: {
        all: '/api/games/getAll',
        popular: '/api/games/popular',
    },
    news: {
        getAll: '/api/news/getAll',
        create: '/api/news/create',
        update: '/api/news/update',
        delete: '/api/news/delete',
    },
    newsLikes: {
        getLikesByNewsId: '/api/newsLikes/getLikesByNewsId',
        addLike: '/api/newsLikes/addLike',
        removeLike: '/api/newsLikes/removeLike',
    },
}

// Example of usage
// console.log(baseURL + urls.movies + API_KEY);

export {
    baseURL,
    apiBaseURL,
    postersURL,
    newsImagesURL,
    urls,
    API_KEY
};
