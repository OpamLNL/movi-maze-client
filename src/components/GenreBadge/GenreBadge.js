import {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getGenres} from "../../store/reducers/genres/genresSelectors";
import {fetchGenres} from "../../store/reducers/genres/genresActions";
import {Badge, Button, Icon} from "../../components";
import {LanguageContext} from "../../language/language-context";

import css from './GenreBadge.module.css';

const GenreBadge = (genreIds ) => {

    const language = useContext(LanguageContext);
    const dispatch = useDispatch();
    const genres = useSelector(getGenres );

    //не добре тут запит класти, знаю
    useEffect(() => {

        dispatch(fetchGenres(language.language));
    }, [dispatch, language]);


    let genreNames = [];

    for (const id of genreIds.genres) {
        const selectedGenres = genres.find((g) => g.id === id);
        genreNames.push(selectedGenres);

    }


    return (
        <div className={css.genreBadgeList}>

            {genreNames.map(genre => (
                <Button key={genre.id} style={{ marginRight: '20px' }}>
                     <Icon name="inbox" />
                     {/*{genre.name}*/}
                    <Badge circle alert value={genre.name} />
                 </Button>
            ))}

        </div>
    );

}

export {GenreBadge};