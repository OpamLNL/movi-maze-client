import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './NewsPage.module.css';
import { selectNews } from '../store/reducers/news/newsSelectors';
import { fetchNews } from '../store/reducers/news/newsActions';
// import { LanguageContext } from '../language/language-context';
import { NewsCard } from "../components";

const NewsPage = () => {
    const dispatch = useDispatch();
    const news = useSelector(selectNews);
    // const language = useContext(LanguageContext);

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    return (
        <div className={css.newsListPage}>
            <div className={css.newsContainer}>
                {news.map((news) => (
                    <NewsCard key={news.id} news={news} />
                ))}
            </div>
        </div>
    );
};

export { NewsPage };
