import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder'; // Іконка для лайків
import VolumeUpIcon from '@material-ui/icons/VolumeUp'; // Іконка для озвучування

import { apiBaseURL, newsImagesURL } from '../../configs/urls';
import { ThemeContext } from '../../themes/theme-context';
import css from './NewsCard.module.css'; // Переконайтесь, що стилі відповідні

const IMG_API = apiBaseURL + newsImagesURL;

export const NewsCard = ({ news }) => {
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles({
        card: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.palette.background.paper,
        },
        content: {
            flex: '1 0 auto',
            padding: theme.spacing(2),
        },
        cover: {
            width: '100%',
            height: 200,
        },
        title: {
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

    const [isSpeaking, setIsSpeaking] = useState(false);

    const handleLike = () => {
        // Припустимо, що у новин є унікальний ID
        // dispatch(addLikeToNews(news.id));
    };

    const speakText = () => {
        if ('speechSynthesis' in window) {
            const speechSynthesis = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(news.content);
            utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'uk-UA'); // Змініть на потрібну мову
            speechSynthesis.cancel(); // Зупиняє будь-яке наявне озвучування перед новим
            speechSynthesis.speak(utterance);
            setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
        }
    };

    return (
        <Card className={classes.card}>
            {news.image_url && (
                <CardMedia
                    className={classes.cover}
                    image={IMG_API + news['image_url']}
                    title={news.title}
                />
            )}
            <CardContent className={classes.content}>
                <Typography component="h5" variant="h5" className={classes.title}>
                    {news.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {news.summary}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {news.content}
                </Typography>
                <Button startIcon={<VolumeUpIcon />} onClick={speakText} disabled={isSpeaking}>
                    Озвучити
                </Button>
                <StarBorderIcon onClick={handleLike} /> {/* Іконка для лайків */}
            </CardContent>
        </Card>
    );
};
