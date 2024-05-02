import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import css from './UserProfile.module.css';

import { logoutUser } from '../../store/reducers/users/usersActions';

import {
    CardContent,
    Avatar,
    Typography } from '@mui/material';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';


import { makeStyles } from '@material-ui/core/styles';
import { apiBaseURL, avatarsURL } from '../../configs/urls';
import { RoundButton } from "../Buttons";
import { Container3d } from "../Containers";
import {LoginRounded, SignpostRounded} from "@mui/icons-material";

const IMG_API = apiBaseURL + avatarsURL;

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: '#334756',
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[5],
        textAlign: 'center',
        maxWidth: '100%',
        margin: 'auto',
    },
    title: {
        color: theme.palette.primary.contrastText,
        marginBottom: theme.spacing(2),
    },
    avatar: {
        margin: 'auto',
        width: theme.spacing(12),
        height: theme.spacing(12),
        marginBottom: theme.spacing(2),
    },
    inputField: {
        '& .MuiInputBase-input': {
            color: theme.palette.primary.dark,
        },
        '& .MuiInputLabel-root': {
            color: theme.palette.primary.dark,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.primary.dark,
            },
            '&:hover fieldset': {
                borderColor: theme.palette.primary.dark,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.dark,
            },
        },
        margin: theme.spacing(1, 0),
    },
    button: {
        margin: theme.spacing(2, 0),
        backgroundColor: theme.palette.primary.contrastText,
        color: '#fff',
        '&:hover': {
            backgroundColor: '#5c7c8a',
        },
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
            <Container3d >
                 <CardContent >
                    <Typography variant="h6">Please sign in</Typography>
                     <div className={css.userFunction}>
                         <RoundButton className={classes.button} onClick={() => navigate('/sign-in')}> <LoginRounded /> </RoundButton>
                         <RoundButton className={classes.button} onClick={() => navigate('/sign-up')}> <SignpostRounded /> </RoundButton>
                     </div>
                </CardContent>
            </Container3d>
        );
    }

    return (
        <Container3d >
            <CardContent>
                <Typography variant="h4" className={classes.title}>
                    {user.username}
                </Typography>
                <Avatar alt={user.username} src={IMG_API + user.avatar} className={classes.avatar} />

                <Typography> {user.email} </Typography>

                <div className={css.userFunction}>
                    <RoundButton className={classes.button} onClick={() => navigate('/edit-profile')}> <PersonOutlineIcon /> </RoundButton>
                    <RoundButton className={classes.button}> <MailOutlineIcon /> </RoundButton>
                    <RoundButton className={classes.button} onClick={handleLogout} > <ExitToAppIcon /> </RoundButton>
                    {user.role === 'admin' && (
                        <RoundButton className={classes.button} onClick={() => navigate('/admin-page')}>
                            <SettingsIcon />
                        </RoundButton>
                    )}
                </div>

            </CardContent>
        </Container3d>
    );
};

