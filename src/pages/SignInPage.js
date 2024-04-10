import React, { useState } from 'react';
import { TextField, Button, Typography, Link } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import {ContrastContainer} from '../components';

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
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Тут можна викликати API для авторизації
        console.log('Дані для входу:', formData);
    };

    return (
        <div className={classes.form}>
            <ContrastContainer title="Вхід" text="">
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
                </form>
                <Typography>
                    Ще не маєте облікового запису? <Link href="/signup" color="inherit">Зареєструйтеся</Link>
                </Typography>
            </ContrastContainer>
        </div>
    );
};

