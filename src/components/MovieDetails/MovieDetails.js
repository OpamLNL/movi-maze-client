import React from "react";
//import { useContext } from "react";
//import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import StarIcon from "@material-ui/icons/Star";

//import { ThemeContext } from "../../themes/theme-context";
//import {LanguageContext} from "../../language/language-context";
//import { MovieContext } from "../themes/theme-context";
//import { IMG_API } from "../api";

const IMG_API = 'https://image.tmdb.org/t/p/w500/';




const MovieDetails = ({movie}) => {

    console.log(movie);

    //const { id } = useParams();
   // const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            padding: theme.spacing(2),
        },
        card: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
        },
        content: {
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
        },
        media: {
            height: 0,
            paddingTop: "150%", // 2:3 aspect ratio
        },
        rating: {
            display: "flex",
            alignItems: "center",
            "& svg": {
                marginRight: theme.spacing(1),
            },
        },
    }));
    const classes = useStyles();



    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={IMG_API + movie.poster_path}
                            title={movie.title}
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {movie.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {movie.release_date}
                            </Typography>
                            <div className={classes.rating}>
                                <StarIcon color="primary" />
                                <Typography variant="body1">{movie.vote_average}</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="h6" gutterBottom>
                        Overview
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {movie.overview}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Genres
                    </Typography>

                    <Typography variant="body1" paragraph>
                        {movie.genres.map((genre) => genre.name).join(", ")}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export {MovieDetails};
