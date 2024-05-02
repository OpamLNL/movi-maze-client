import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';

import { fetchUsers, createUser, deleteUser, updateUser } from '../store/reducers/users/usersActions';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
    },
    table: {
        minWidth: 650,
    },
    tableHead: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    tableRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
    searchInput: {
        marginBottom: theme.spacing(2),
    },
}));

export const AdminPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const [openDialog, setOpenDialog] = useState(false);
    const [editUser, setEditUser] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleOpenDialog = (user = null) => {
        setEditUser(user);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setEditUser(null);
    };

    const handleAddOrUpdateUser = async () => {
        if (editUser.id) {
            await dispatch(updateUser(editUser));
        } else {
            await dispatch(createUser(editUser));
        }
        dispatch(fetchUsers());
        handleCloseDialog();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleDeleteUser = async (userId) => {
        await dispatch(deleteUser(userId));
        dispatch(fetchUsers());
    };

    return (
        <Container className={classes.container}>
            <h1>Адміністративна панель</h1>
            <Button variant="contained" color="primary" onClick={() => handleOpenDialog()}>
                Додати користувача
            </Button>
            <Paper className={classes.container}>
                <TextField
                    className={classes.searchInput}
                    label="Швидкий пошук"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <Table className={classes.table} aria-label="table of users">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead}>ID</TableCell>
                            <TableCell className={classes.tableHead}>Ім'я користувача</TableCell>
                            <TableCell className={classes.tableHead}>Email</TableCell>
                            <TableCell className={classes.tableHead}>Дії</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <Button color="primary" onClick={() => handleOpenDialog(user)}>Редагувати</Button>
                                    <Button color="secondary" onClick={() => handleDeleteUser(user.id)}>Видалити</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>{editUser?.id ? 'Редагувати користувача' : 'Додати користувача'}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="username"
                        label="Ім'я користувача"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={editUser?.username || ''}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={editUser?.email || ''}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Скасувати
                    </Button>
                    <Button onClick={handleAddOrUpdateUser} color="primary">
                        Зберегти
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};
