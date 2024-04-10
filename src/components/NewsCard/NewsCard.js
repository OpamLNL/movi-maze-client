import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder'; // Іконка для лайків

import {apiBaseURL, newsImagesURL} from '../../configs/urls';
import { ThemeContext } from '../../themes/theme-context';
import css from './NewsCard.module.css'; // Переконайтесь, що стилі відповідні

// Функція для додавання лайка (припустимо, що вона існує в вашому newsActions)
// import { addLikeToNews } from '../../store/reducers/news/newsActions';

const IMG_API = apiBaseURL + newsImagesURL;



export const NewsCard = ({ news }) => {
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles({
        card: {
            display: 'flex',
            backgroundColor: theme.palette.background.paper,
        },
        content: {
            flex: '0 0 auto',
        },
        cover: {
            width: 151,
        },
        title:{
            color: theme.palette.primary.contrastText,
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    });

    const classes = useStyles();

    const handleLike = () => {
        // Припустимо, що у новин є унікальний ID
        // dispatch(addLikeToNews(news.id));
    };


    console.log(IMG_API + news['image_url']);
    console.log(news);
    return (
        <Card className={classes.card}>

            <CardMedia
                className={classes.cover}
                image={IMG_API + news['image_url']}
                title={news.title}
            />
            <div className={classes.content}>
                <CardContent>
                    <Typography component="h5" variant="h5" className={classes.title}>
                        {news.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {news.description}
                    </Typography>
                    <div className={classes.content}>
                        {news.content}
                    </div>
                    <StarBorderIcon onClick={handleLike} /> {/* Іконка для лайків */}
                </CardContent>
            </div>
        </Card>
    );
};

