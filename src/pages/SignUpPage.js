//import {useDispatch} from "react-redux";
import React, {useState} from "react";
//import {LanguageProvider, useTranslate} from "../language/language-context";
import css from "./SignUpPage.module.css";
import TextField from "@mui/material/TextField";
import {ContrastContainer} from "../components";



const SignUpPage = () => {
    //const dispatch = useDispatch();
    //const language = React.useContext(LanguageProvider, useTranslate);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ваша логіка для обробки реєстрації тут
    };




    return (
        <div className={css.signUpFieldsBlock}>
            <ContrastContainer title="Реєстрація" text="kkk">
                <h2>Реєстрація</h2>
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
                    {/* Аналогічно додайте TextField для електронної пошти та пароля */}
                    <button type="submit">Зареєструватися</button>
                </form>
                <p>Вже маєте обліковий запис? <a href="/login">Увійдіть</a></p>
            </ContrastContainer>
        </div>
    );
};

export { SignUpPage };


