import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/reducers/users/usersActions';
import { selectUsers, selectUsersLoading, selectUsersError } from '../../store/reducers/users/usersSelectors';
import css from './UserList.module.css';
import {UserListItem} from "../ListItems";
import { Avatar } from "@mui/material";
import { RoundButton } from "../../components";
import {SectionContainer} from "../Containers";

import { apiBaseURL, avatarsURL } from "../../configs/urls";
import {useNavigate} from "react-router-dom";


const IMG_API = apiBaseURL + avatarsURL;


const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const loading = useSelector(selectUsersLoading);
    const error = useSelector(selectUsersError);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    let sortedUsers = [...users].sort((a, b) => {
        if (a.role && b.role) {
            return a.role.localeCompare(b.role);
        }
        if (!a.role) {
            return 1;
        }
        if (!b.role) {
            return -1;
        }
        return 0;
    });


    return (
        <SectionContainer title="Зараз на сайті">
            {sortedUsers.map((user, index) => (
                <UserListItem key={user.id} >

                    <RoundButton onClick={() => navigate(`/profile/${encodeURIComponent(user.username)}`)}>
                        <Avatar
                            src={IMG_API + user.avatar}
                            sx={{ width: 24, height: 24 }}
                        />
                    </RoundButton>
                        {user.username}
                </UserListItem>


            ))}
        </SectionContainer>
    );
};

export { UserList };
