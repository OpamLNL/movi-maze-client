import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../store/reducers/news/newsActions';
import { selectNews, selectNewsLoading, selectNewsError } from '../../store/reducers/news/newsSelectors';
import { NewsListItem } from "../ListItems";

const NewsList = () => {
    const dispatch = useDispatch();
    const news = useSelector(selectNews);
    const loading = useSelector(selectNewsLoading);
    const error = useSelector(selectNewsError);

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const sortedNews = [...news].sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div>
            {sortedNews && sortedNews.map((newsItem) => (
                <NewsListItem key={newsItem.id} news={newsItem} />
            ))}
        </div>
    );
};

export { NewsList };
