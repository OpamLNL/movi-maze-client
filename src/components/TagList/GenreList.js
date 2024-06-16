import {useDispatch, useSelector} from 'react-redux';

import css from './GenreList.module.css';

import { getGenres  } from '../../store/reducers/genres/genresSelectors';
import {useContext, useEffect} from 'react';
import { fetchGenres} from '../../store/reducers/genres/genresActions';

import { Button, Icon } from '../../components';
import { LanguageContext } from "../../language/language-context";

const GenreList = () => {

    const language = useContext(LanguageContext);
    const dispatch = useDispatch();
    const genres = useSelector(getGenres );

    useEffect(() => {

        dispatch(fetchGenres(language.language));
    }, [dispatch, language]);



    return (
        <div>
            <div className={css.genreListBlock}>
                {genres.map(genre => (
                    <Button key={genre.id} style={{ marginRight: '20px' }}>
                        <Icon name="inbox" />
                        {genre.name}
                        {/*<Badge circle alert value={genre.id} />*/}
                    </Button>
                ))}
            </div>

        </div>
    );
}

export {GenreList};