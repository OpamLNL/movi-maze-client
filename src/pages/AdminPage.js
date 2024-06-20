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
import { fetchGames, createGame, deleteGame, updateGame } from '../store/reducers/games/gamesActions';
import { RoundButton, Button } from "../components";

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
    functionButton: {
        marginBottom: theme.spacing(2),
        width: "7vw",
        margin: "5 5 5 15",
    },
}));

export const AdminPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const news = useSelector(state => state.news.news);
    const games = useSelector(state => state.games.games);
    const [openDialog, setOpenDialog] = useState(false);
    const [editUser, setEditUser] = useState(null);
    const [editNews, setEditNews] = useState(null);
    const [editGame, setEditGame] = useState(null);
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [itemIdToDelete, setItemIdToDelete] = useState(null);
    const [itemTypeToDelete, setItemTypeToDelete] = useState(null);
    const [showUsers, setShowUsers] = useState(true);
    const [showNews, setShowNews] = useState(true);
    const [showGames, setShowGames] = useState(true);

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchNews());
        dispatch(fetchGames());
    }, [dispatch]);

    const handleOpenDialog = (item = null) => {
        setEditUser(null);
        setEditNews(null);
        setEditGame(null);


        if (item.type === 'user') {
            setEditUser(item.item);
        } else if (item.type === 'news') {
            console.log(item.type);
            setEditNews(item.item);
        } else if (item.type === 'game') {
            setEditGame(item.item);
        }
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setEditUser(null);
        setEditNews(null);
        setEditGame(null);
    };

    const handleAddOrUpdateItem = async () => {
        if (editUser) {
            if (editUser.id) {
                await dispatch(updateUser(editUser.id, editUser));
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
        } else if (editGame) {
            if (editGame.id) {
                await dispatch(updateGame(editGame));
            } else {
                await dispatch(createGame(editGame));
            }
            dispatch(fetchGames());
        }
        handleCloseDialog();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (editUser !== null) {
            setEditUser((prev) => ({ ...prev, [name]: value }));
        } else if (editNews !== null) {
            setEditNews((prev) => ({ ...prev, [name]: value }));
        } else if (editGame !== null) {
            setEditGame((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleDeleteItem = async (itemId, type) => {
        setItemIdToDelete(itemId);
        setItemTypeToDelete(type);
        setDeleteConfirmationOpen(true);
    };

    const confirmDelete = async () => {
        if (itemIdToDelete && itemTypeToDelete) {
            if (itemTypeToDelete === 'user') {
                await dispatch(deleteUser(itemIdToDelete));
                dispatch(fetchUsers());
            } else if (itemTypeToDelete === 'news') {
                await dispatch(deleteNews(itemIdToDelete));
                dispatch(fetchNews());
            } else if (itemTypeToDelete === 'game') {
                await dispatch(deleteGame(itemIdToDelete));
                dispatch(fetchGames());
            }
        }
        setDeleteConfirmationOpen(false);
    };

    const cancelDelete = () => {
        setItemIdToDelete(null);
        setItemTypeToDelete(null);
        setDeleteConfirmationOpen(false);
    };

    const toggleShowUsers = () => {
        setShowUsers(!showUsers);
    };

    const toggleShowNews = () => {
        setShowNews(!showNews);
    };

    const toggleShowGames = () => {
        setShowGames(!showGames);
    };

    return (
        <Container className={classes.container}>
            <div>
                <h1>Адміністративна панель</h1>
            </div>

            <div className={css.userFunction}>


                        <div className={css.userFunction}>
                            <Button onClick={toggleShowUsers}>
                                {showUsers ? 'Сховати користувачів' : 'Показати користувачів'}
                            </Button>
                            <Button onClick={toggleShowNews}>
                                {showNews ? 'Сховати новини' : 'Показати новини'}
                            </Button>
                            <Button onClick={toggleShowGames}>
                                {showGames ? 'Сховати ігри' : 'Показати ігри'}
                            </Button>

                            <div>
                                <Tooltip title="Додати користувача" className={classes.functionButton}>
                                    <RoundButton onClick={() => handleOpenDialog({ type: 'user' })}>
                                        Користувачі <AddCircleTwoToneIcon />
                                    </RoundButton>
                                </Tooltip>
                                <Tooltip title="Додати новину" className={classes.functionButton}>
                                    <RoundButton onClick={() => handleOpenDialog({ type: 'news' })}>
                                        Новини <AddCircleTwoToneIcon />
                                    </RoundButton>
                                </Tooltip>
                                <Tooltip title="Додати гру" className={classes.functionButton}>
                                    <RoundButton onClick={() => handleOpenDialog({ type: 'game' })}>
                                        Ігри <AddCircleTwoToneIcon />
                                    </RoundButton>
                                </Tooltip>
                            </div>
                        </div>


            </div>


            <Paper className={classes.container}>
                <TextField
                    className={classes.searchInput}
                    label="Швидкий пошук"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                {showUsers && (
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
                )}
                {showNews && (
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
                )}
                {showGames && (
                    <Table className={classes.table} aria-label="table of games">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHead}>ID</TableCell>
                                <TableCell className={classes.tableHead}>Заголовок</TableCell>
                                <TableCell className={classes.tableHead}>Опис</TableCell>
                                <TableCell className={classes.tableHead}>Постер</TableCell>
                                <TableCell className={classes.tableHead}>Посилання на гру</TableCell>
                                <TableCell className={classes.tableHead}>Дії</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {games.map((game) => (
                                <TableRow key={game.id}>
                                    <TableCell>{game.id}</TableCell>
                                    <TableCell>{game.title}</TableCell>
                                    <TableCell>{game.description}</TableCell>
                                    <TableCell>{game.poster}</TableCell>
                                    <TableCell>{game.link}</TableCell>
                                    <TableCell>
                                        <div className={css.userFunction}>
                                            <Tooltip title="Редагувати гру">
                                                <RoundButton color="primary" onClick={() => handleOpenDialog({ type: 'game', item: game })}> <EditNoteRoundedIcon /></RoundButton>
                                            </Tooltip>
                                            <Tooltip title="Видалити гру">
                                                <RoundButton color="secondary" onClick={() => handleDeleteItem(game.id, 'game')}> <DeleteForeverRoundedIcon /> </RoundButton>
                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </Paper>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>{editUser?.id ? 'Редагувати користувача' : editNews?.id ? 'Редагувати новину' : editGame?.id ? 'Редагувати гру' : 'Додати'}</DialogTitle>
                <DialogContent>
                    {editUser !== null ? (
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
                    ) : editNews !== null ? (
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
                    ) : editGame !== null ? (
                        <>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="title"
                                label="Заголовок"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={editGame?.title || ''}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="dense"
                                name="description"
                                label="Опис"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={editGame?.description || ''}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="dense"
                                name="poster"
                                label="Постер"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={editGame?.poster || ''}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="dense"
                                name="link"
                                label="Посилання на гру"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={editGame?.link || ''}
                                onChange={handleChange}
                            />
                        </>
                    ) : null}
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

            <Dialog
                open={deleteConfirmationOpen}
                onClose={cancelDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Підтвердження видалення"}</DialogTitle>
                <DialogContent>
                    <DialogContent id="alert-dialog-description">
                        Ви впевнені, що хочете видалити цей елемент?
                    </DialogContent>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelDelete} color="primary">
                        Ні
                    </Button>
                    <Button onClick={confirmDelete} color="primary" autoFocus>
                        Так
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};
