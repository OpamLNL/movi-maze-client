import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createUser } from '../store/reducers/users/usersActions';
import { TextField, Button, Typography, Link } from '@mui/material';
import { SectionContainer } from '../components';
import css from './SignUpPage.module.css';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "15px 2px 2px 2px",
        padding: "10px",
        width: "98%",
        color: theme.palette.primary.light,
        backgroundColor: theme.palette.primary.dark,
        justifyContent: "center",
    },
}));

export const SignUpPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        avatar: '',
        birth_date: '',
        bio: '',
        phone_number: '',
        language: '',
        timezone: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        dispatch(createUser(formData, (user, tokens) => {
            if (tokens) {
                localStorage.setItem('jwtAccessToken', tokens.accessToken);
                localStorage.setItem('jwtRefreshToken', tokens.refreshToken);
                navigate('/home');
            }
        }));
    };

    return (
        <div className={css.signUpFieldsBlock}>
            <SectionContainer title="Реєстрація">
                <form onSubmit={handleSubmit} className={classes.paper}>
                    <TextField
                        label="Ім'я користувача"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Електронна пошта"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                    />
                    <TextField
                        label="Пароль"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                    />
                    <TextField
                        label="Телефонний номер"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        type="tel"
                    />
                    <TextField
                        label="Біографія"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        multiline
                        rows={3}
                    />
                    <TextField
                        label="Дата народження"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="birth_date"
                        value={formData.birth_date}
                        onChange={handleChange}
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        label="Мова"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Часовий пояс"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="timezone"
                        value={formData.timezone}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Аватар URL"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="avatar"
                        value={formData.avatar}
                        onChange={handleChange}
                        type="url"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Зареєструватися
                    </Button>
                </form>
                <Typography>
                    Ще не маєте облікового запису? <Link href="/login" color="inherit">Увійдіть</Link>
                </Typography>
            </SectionContainer>
        </div>
    );
};
