import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextField, Button, Typography, Link } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { ContrastContainer } from '../components';
import { axiosInstance } from '../api/axiosConfig';

const useStyles = makeStyles({
    form: {
        width: '100%',
        justifyContent: "center",
    },
    submit: {
        marginTop: 15,
    },
});

export const SignInPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/api/auth/signin', formData);
            const { user, accessToken, refreshToken } = response.data;
            localStorage.setItem('jwtAccessToken', accessToken);
            localStorage.setItem('jwtRefreshToken', refreshToken);
            localStorage.setItem('user', JSON.stringify(user));

            navigate('/home');
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Невідома помилка';
            setError('Не вдалося ввійти: ' + errorMsg);
        }
    };

    return (
        <div className={classes.form}>
            <Typography>
                Ще не маєте облікового запису? <Link href="/sign-up" color="inherit">Зареєструйтеся</Link>
            </Typography>
            <ContrastContainer title="Вхід">
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Електронна пошта"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                    />
                    <TextField
                        label="Пароль"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Увійти
                    </Button>
                    {error && <Typography color="error">{error}</Typography>}
                </form>


            </ContrastContainer>
        </div>
    );
};
