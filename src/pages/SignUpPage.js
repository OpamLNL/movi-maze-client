import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { ContrastContainer } from '../components';
import css from './SignUpPage.module.css';

export const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Тут код для обробки даних реєстрації, наприклад, відправка на сервер
        console.log(formData);
    };

    return (
        <div className={css.signUpFieldsBlock}>
            <ContrastContainer title="Реєстрація">
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Ім'я"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="name"
                        value={formData.name}
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
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Зареєструватися
                    </Button>
                </form>
                <p>Вже маєте обліковий запис? <a href="/login">Увійдіть</a></p>
            </ContrastContainer>
        </div>
    );
};

