import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import css from './MoviesListCard.module.css';

import { GenreBadge, StarsRating } from '../../components';
import { useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { fetchGenres} from "../../store/reducers/genres/genresActions";
import { LanguageContext } from "../../language/language-context";
import { ThemeContext } from "../../themes/theme-context";



const MoviesListCard = ({ movie }) => {

    const rating = movie.vote_average;
    const genreArray = movie.genre_ids;


    const language = useContext(LanguageContext);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchGenres(language.language));
    }, [dispatch, language]);


    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles({
        linkButton: {
            backgroundColor: theme.palette.primary,
            color: theme.palette.primary.contrastText,
            padding: '10px',
            borderRadius: '5px',
            textDecoration: 'none',
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
            },
        },
    });
    const classes = useStyles();


    return (
        <Link to={`/movie-details/${movie.id}`} className={classes.linkButton}>
        <div className={css.movieListCard} >


            <div >
                <GenreBadge genres = {genreArray}/>
            </div>
                <div className={css.movieTitle}>
                    <div >
                            {movie.title}
                    </div>
                    <div >
                        <StarsRating rating = {rating} />
                    </div>
                </div>
            <div>
                {movie.overview}
            </div>

                <div className={css.movieMainContent}>
                        <img className={css.zoom} src={'https://image.tmdb.org/t/p/w500' + movie['poster_path']} alt = {movie.title} />
                            {movie.title}
                        />
                </div>


        </div>
        </Link>
    );
}



export {MoviesListCard};

