import css from './UserProfile.module.css';

import { Card, CardContent, Avatar, Button } from '@mui/material';
import Typography from "@mui/material/Typography";
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import {selectUsers} from "../../store/reducers/users/usersSelectors";
import { apiBaseURL, avatarsURL } from "../../configs/urls";


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
    editButton: {
        margin: theme.spacing(2),
    },
}));

export const UserProfile = ({ user }) => {
    const classes = useStyles();


    return (
        <Card className={classes.card}>
            <CardContent>
                <Avatar alt={user.username} src={IMG_API + user['avatar']} className={classes.avatar} />
                <Typography variant="h5">{user.username}</Typography>
                <Typography color="textSecondary">{user.handle}</Typography>
                <Typography color="textSecondary">{user.genderPronouns}</Typography>
                <Button variant="outlined" className={classes.editButton}>
                    Edit profile
                </Button>
                <Typography variant="body2">
                    🎈 {user.followers} followers · {user.following} following
                </Typography>
            </CardContent>
        </Card>
    );
};

const userProps = {
    username: 'Absentee',
    handle: 'Absentee13',
    genderPronouns: 'she/her',
    avatar: '/path/to/avatar.jpg', // Шлях до зображення аватару
    followers: 9,
    following: 12,
};

