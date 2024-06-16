
const baseURL = 'https://api.themoviedb.org'
const apiBaseURL = 'http://localhost:5000';
const postersURL = '/images/posters/';
const gamesURL = '/games-repository/';
const avatarsURL = '/images/avatars/';
const newsImagesURL = '/images/newsImages/';

const urls = {
    users: {
        getAll: '/api/users/getAll',
        getById: '/api/users/getUserById',
        getByUsername: '/api/users/getUserByUsername',
        create: '/api/users/create',
        update: '/api/users/update',
        delete: '/api/users/delete/:id',
    },
    games: {
        getAll: '/api/games/getAll',
        getById: '/api/games/getGameById',
        create: '/api/games/create',
        update: '/api/games/update',
        delete: '/api/games/delete',
    },
    news: {
        getAll: '/api/news/getAll',
        getById: '/api/news/getNewsById/:id',
        create: '/api/news/create',
        update: '/api/news/update/:id',
        delete: '/api/news/delete/:id',
    },
    newsLikes: {
        getLikesByNewsId: '/api/newsLikes/getLikesByNewsId/:newsId',
        addLike: '/api/newsLikes/addLike',
        removeLike: '/api/newsLikes/removeLike/:id',
    },
    tags: {
        getAll: '/api/tags/getAll',
        getById: '/api/tags/getById/:id',
        create: '/api/tags/create',
        update: '/api/tags/update/:id',
        delete: '/api/tags/delete/:id',
    },
    comments: {
        create: '/admin/comments/create',
        update: '/admin/comments/update/:id',
        delete: '/admin/comments/delete/:id',
    }
}

export {
    baseURL,
    apiBaseURL,
    postersURL,
    avatarsURL,
    newsImagesURL,
    urls
};


