import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/reducers/users/usersActions';
import { selectUsers, selectUsersLoading, selectUsersError } from '../../store/reducers/users/usersSelectors';

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const loading = useSelector(selectUsersLoading);
    const error = useSelector(selectUsersError);

    useEffect(() => {
        // Викликайте action creator для отримання списку юзерів при завантаженні компонента
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
            <h2>User List</h2>
            <ul>
                {sortedUsers && sortedUsers.map((user) => (

                    <li key={user.id}>{user.role}   {user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export { UserList };
