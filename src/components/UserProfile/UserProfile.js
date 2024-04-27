import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/reducers/users/usersActions';

import { Card, CardContent, Avatar, Button, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { apiBaseURL, avatarsURL } from '../../configs/urls';

const IMG_API = apiBaseURL + avatarsURL;

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        textAlign: 'center',
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: 'auto',
    },
    button: {
        margin: theme.spacing(2),
    },
}));

export const UserProfile = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userString = localStorage.getItem('user');
    let user = null;
    try {
        user = userString ? JSON.parse(userString) : null;
    }
    catch (e){}
    const accessToken = localStorage.getItem('jwtAccessToken');

    const handleLogout = () => {
        localStorage.removeItem('jwtAccessToken');
        localStorage.removeItem('jwtRefreshToken');
        localStorage.removeItem('user');
        dispatch(logoutUser());
        navigate('/home');
    };

    if (!accessToken || !user) {
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6">Please sign in</Typography>
                    <Button variant="contained" color="primary" className={classes.button} onClick={() => navigate('/sign-in')}>
                        Login
                    </Button>
                    <Button variant="outlined" className={classes.button} onClick={() => navigate('/sign-up')}>
                        Sign Up
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Avatar alt={user.username} src={IMG_API + user.avatar} className={classes.avatar} />
                <Typography variant="h5">{user.username}</Typography>
                <Typography color="textSecondary">{user.email}</Typography>
                <Button variant="outlined" className={classes.button} onClick={() => navigate('/edit-profile')}>
                    Edit profile
                </Button>
                <Button variant="outlined" color="secondary" className={classes.button} onClick={handleLogout}>
                    Logout
                </Button>
            </CardContent>
        </Card>
    );
};

