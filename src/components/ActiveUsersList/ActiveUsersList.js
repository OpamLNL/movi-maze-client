import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

const ActiveUsersList = ({ users }) => {


    return (
        <List>
            {users.map((user) => (
                <ListItem key={user.id}>
                    <ListItemAvatar>
                        <Avatar alt={user.name} src={user.avatarUrl} />
                    </ListItemAvatar>
                    <ListItemText primary={user.name} secondary={user.status} />
                </ListItem>
            ))}
        </List>
    );
};

export { ActiveUsersList };
