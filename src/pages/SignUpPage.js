import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createUser } from '../store/reducers/users/usersActions';
import { TextField, Button } from '@mui/material';
import { ContrastContainer } from '../components';
import css from './SignUpPage.module.css';

export const SignUpPage = () => {
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

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        dispatch(createUser(formData));
    };

    return (
        <div className={css.signUpFieldsBlock}>
            <ContrastContainer title="Реєстрація">
                <form onSubmit={handleSubmit}>
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
                <p>Вже маєте обліковий запис? <a href="/login">Увійдіть</a></p>
            </ContrastContainer>
        </div>
    );
};
