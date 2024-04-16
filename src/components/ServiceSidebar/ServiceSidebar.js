import css from './ServiceSidebar.module.css';

import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../store/reducers/users/usersSelectors";
import { UserProfile } from "../UserProfile/UserProfile";
import { fetchUsers } from "../../store/reducers/users/usersActions";
import { UserList } from "../../components";



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

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    const user = users[users.length - 1];

    const classes = useStyles();
    return (
                <div className={css.mainSide}>
                    <div className={css.profile}>
                        {user && <UserProfile user={user} />}
                    </div>

                    <div className={css.mainContainerSides}>
                        <UserList />
                    </div>
                </div>
    );
};

