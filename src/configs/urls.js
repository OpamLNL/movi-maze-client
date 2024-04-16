
const baseURL = 'https://api.themoviedb.org'
const apiBaseURL = 'http://localhost:5000';
const postersURL = '/images/posters/';
const avatarsURL = '/images/avatars/';
const newsImagesURL = '/images/newsImages/';

const urls = {

    users: {
        all: '/api/users/getAll',
        active: '/api/users/active',
        create: '/api/users/create',
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


export {
    baseURL,
    apiBaseURL,
    postersURL,
    avatarsURL,
    newsImagesURL,
    urls
};
