// GameCard.js
import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import StarIcon from "@material-ui/icons/Star";
import { apiBaseURL, postersURL } from "../../configs/urls";
import css from './GameCard.module.css';




import { LanguageContext } from "../../language/language-context";
import { ThemeContext } from "../../themes/theme-context";
import {StarsRating} from "../StarsRating/StarsRating";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const IMG_API = apiBaseURL + postersURL;

const GameCard = ({ game }) => {

    const rating = game.vote_average;
   // const genreArray = movie.genre_ids;


    const language = useContext(LanguageContext);
    const dispatch = useDispatch();

    // useEffect(() => {
    //
    //     dispatch(fetchGenres(language.language));
    // }, [dispatch, language]);

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
        <Link to={`/movie-details/${game.id}`} className={classes.linkButton}>
            <div className={css.gameCard} >


                {/*<div >*/}
                {/*    <GenreBadge genres = {genreArray}/>*/}
                {/*</div>*/}
                <div className={css.gameTitle}>
                    <div >
                        {game.title}
                    </div>
                    <div >
                        <StarsRating rating = {game.rating} />
                    </div>
                </div>

                <div>
                    {game.description}
                </div>

                <div className={css.gameMainContent}>
                    <img className={css.zoom} src={IMG_API + game['poster_url']} alt = {game.title} />
                    {game.title}
                    />
                </div>


            </div>
        </Link>
    );
}



export {GameCard};





// const GameCard = ({ game }) => {
//
//     const classes = makeStyles(css)();
//
//     return (
//         <div className={classes.root}>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} sm={4}>
//                     <Card className={classes.card}>
//                         <CardMedia
//                             className={classes.media}
//                             image={IMG_API + game.poster_url}
//                             title={game.title}
//                         />
//                         <CardContent className={classes.content}>
//                             <Typography gutterBottom variant="h5" component="h2">
//                                 {game.title}
//                             </Typography>
//                             <Typography variant="body2" color="textSecondary">
//                                 {game.release_date}
//                             </Typography>
//                             <div className={classes.rating}>
//                                 <StarIcon color="primary" />
//                                 <Typography variant="body1">{game.vote_average}</Typography>
//                             </div>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//                 <Grid item xs={12} sm={8}>
//                     <Typography variant="h6" gutterBottom>
//                         Overview
//                     </Typography>
//                     <Typography variant="body1" paragraph>
//                         {game.overview}
//                     </Typography>
//                     <Typography variant="h6" gutterBottom>
//                         Genres
//                     </Typography>
//                     <Typography variant="body1" paragraph>
//                         жанр
//                     </Typography>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// };
//
// export { GameCard };
