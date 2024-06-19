import css from './ServiceSidebar.module.css';



import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../store/reducers/users/usersSelectors";
import { UserProfile } from "../UserProfile/UserProfile";
import { fetchUsers } from "../../store/reducers/users/usersActions";
import { UserList } from "../../components";

import { RoundButton } from "../Buttons";
import { Container3d } from "../Containers";
import { LoginRounded, SignpostRounded } from "@mui/icons-material";
import {
    CardContent,
    Avatar,
    Typography, Link
} from '@mui/material';



const useStyles = makeStyles((theme) => ({
    sidebar: {
        padding: "2px 2px 2px 2px",
        width: "98%",

        backgroundColor: theme.palette.background.paper,
    },
}));

export const ServiceSidebar = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);

    const navigate = useNavigate();

console.log(localStorage.getItem('user'));


    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    const user = users[users.length - 1];

    const classes = useStyles();
    return (
                <div className={css.mainSide}>
                    <div className={css.profile}>
                        {user && <UserProfile user={user} />}

                        { !localStorage.getItem('user') &&
       
                            <Container3d >
                                <CardContent >
                                    <Typography variant="h6">Please sign in</Typography>
                                    <div className={css.userFunction}>
                                        <RoundButton className={classes.button} onClick={() => navigate('/sign-in')}> <LoginRounded /> </RoundButton>
                                        <RoundButton className={classes.button} onClick={() => navigate('/sign-up')}> <SignpostRounded /> </RoundButton>
                                    </div>
                                </CardContent>
                            </Container3d>
                        }
    
                    </div>

                    <div className={css.mainContainerSides}>
                        <UserList />
                    </div>
                </div>
    );
};

