import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/reducers/users/usersActions';
import { selectUsers, selectUsersLoading, selectUsersError } from '../../store/reducers/users/usersSelectors';
import css from './UserList.module.css';
import {UserListItem} from "../ListItems";


const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const loading = useSelector(selectUsersLoading);
    const error = useSelector(selectUsersError);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }


    const sortedUsers = [...users].sort((a, b) => a.role.localeCompare(b.role));

    return (
        <div>
                {sortedUsers && sortedUsers.map((user) => (
                    <UserListItem key={user.id}>
                        {user.role}   {user.username}
                    </UserListItem>
                ))}
        </div>
    );
};

export { UserList };
