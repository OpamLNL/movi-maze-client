import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './AdminPage.module.css';

import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';

import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


import { makeStyles } from '@material-ui/core/styles';

import { fetchUsers, createUser, deleteUser, updateUser } from '../store/reducers/users/usersActions';
import { fetchNews, createNews, deleteNews, updateNews } from '../store/reducers/news/newsActions';
import { RoundButton } from "../components";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "99%",
        marginTop: theme.spacing(4),
    },
    table: {

        minWidth: "97%",
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
    const news = useSelector(state => state.news.news);
    const [openDialog, setOpenDialog] = useState(false);
    const [editUser, setEditUser] = useState(null);
    const [editNews, setEditNews] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchNews());
    }, [dispatch]);

    const handleOpenDialog = (item = null) => {
        if (item.type === 'user') {
            setEditUser(item.item);
        } else if (item.type === 'news') {
            setEditNews(item.item);
        }
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setEditUser(null);
        setEditNews(null);
    };

    const handleAddOrUpdateItem = async () => {
        if (editUser) {
            if (editUser.id) {
                await dispatch(updateUser(editUser));
            } else {
                await dispatch(createUser(editUser));
            }
            dispatch(fetchUsers());
        } else if (editNews) {
            if (editNews.id) {
                await dispatch(updateNews(editNews));
            } else {
                await dispatch(createNews(editNews));
            }
            dispatch(fetchNews());
        }
        handleCloseDialog();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (editUser) {
            setEditUser((prev) => ({ ...prev, [name]: value }));
        } else if (editNews) {
            setEditNews((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleDeleteItem = async (itemId, type) => {
        if (type === 'user') {
            await dispatch(deleteUser(itemId));
            dispatch(fetchUsers());
        } else if (type === 'news') {
            await dispatch(deleteNews(itemId));
            dispatch(fetchNews());
        }
    };

    return (
        <Container className={classes.container}>

            <div className={css.userFunction}>
                <h1>Адміністративна панель</h1>
                <Tooltip title="Додати користувача">
                    <RoundButton variant="contained" color="primary" onClick={() => handleOpenDialog({ type: 'user' })}>
                        Користувачі <AddCircleTwoToneIcon />
                    </RoundButton>
                </Tooltip>
                <Tooltip title="Додати новину">
                    <RoundButton variant="contained" color="primary" onClick={() => handleOpenDialog({ type: 'news' })}>
                        Новини <AddCircleTwoToneIcon />
                    </RoundButton>
                </Tooltip>
            </div>

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
                                    <div className={css.userFunction}>
                                        <Tooltip title="Редагувати користувача">
                                            <RoundButton color="primary" onClick={() => handleOpenDialog({ type: 'user', item: user })}> <EditNoteRoundedIcon /></RoundButton>
                                        </Tooltip>
                                        <Tooltip title="Видалити користувача">
                                            <RoundButton color="secondary" onClick={() => handleDeleteItem(user.id, 'user')}> <DeleteForeverRoundedIcon /> </RoundButton>
                                        </Tooltip>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Table className={classes.table} aria-label="table of news">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead}>ID</TableCell>
                            <TableCell className={classes.tableHead}>Заголовок</TableCell>
                            <TableCell className={classes.tableHead}>Зміст</TableCell>
                            <TableCell className={classes.tableHead}>Дії</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {news.map((newsItem) => (
                            <TableRow key={newsItem.id}>
                                <TableCell>{newsItem.id}</TableCell>
                                <TableCell>{newsItem.title}</TableCell>
                                <TableCell>{newsItem.content}</TableCell>
                                <TableCell>
                                    <div className={css.userFunction}>
                                        <Tooltip title="Редагувати новину">
                                            <RoundButton color="primary" onClick={() => handleOpenDialog({ type: 'news', item: newsItem })}> <EditNoteRoundedIcon /></RoundButton>
                                        </Tooltip>
                                        <Tooltip title="Видалити новину">
                                            <RoundButton color="secondary" onClick={() => handleDeleteItem(newsItem.id, 'news')}> <DeleteForeverRoundedIcon /> </RoundButton>
                                        </Tooltip>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>{editUser?.id ? 'Редагувати користувача' : editNews?.id ? 'Редагувати новину' : 'Додати'}</DialogTitle>
                <DialogContent>
                    {editUser || editNews ? (
                        <>
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
                        </>
                    ) : (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="title"
                                label="Заголовок"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={editNews?.title || ''}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="dense"
                                name="content"
                                label="Зміст"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={editNews?.content || ''}
                                onChange={handleChange}
                            />
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Скасувати
                    </Button>
                    <Button onClick={handleAddOrUpdateItem} color="primary">
                        Зберегти
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};
