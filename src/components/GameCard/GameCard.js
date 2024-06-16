// GameCard.js
import {useContext} from "react";
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
import {TagBadge} from "../TagBadge/TagBadge";

const IMG_API = apiBaseURL + postersURL;
const GameCard = ({ game }) => {

   const tagArray = game.tags_ids.split(',');



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

        <Link to={`/gamePage/${game.id}`} className={classes.linkButton}>
            <div className={css.gameCard} >

                <div >
                    <TagBadge tagIds = {tagArray}/>
                </div>
                <div className={css.gameTitle}>
                    <div >
                        {game.title}
                    </div>

                    <div >
                        <StarsRating rating = {game.rating} />
                    </div>
                </div>



                <div className={css.gameMainContent}>
                    {game['poster_url']}
                    <img className={css.zoom} src={IMG_API + game['poster_url']} alt = {game.title} />

                    {game.title}
                </div>

                <div>
                    {game.description}
                </div>


            </div>
        </Link>
    );
}


export {GameCard};


