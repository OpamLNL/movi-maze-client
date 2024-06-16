import React, { useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from '@material-ui/core';

import css from './App.module.css';

import {    AdminLayout,
            GameLayout,
            GamesLayout,
            EditProfileLayout,
            ProfileLayout,
            MainLayout,
            NewsLayout,
            SignInLayout,
            SignUpLayout
        } from './layouts';

import {
            Header,
            LeftSidebar,
            ServiceBar,
            SectionContainer
        } from './components';

import { ThemeContext} from './themes/theme-context';
import { lightTheme, darkTheme} from './themes/theme';

import { LanguageProvider } from './language/language-context';
import { ServiceSidebar } from "./components/ServiceSidebar/ServiceSidebar";
import { GamePage } from "./pages/GamePage";

export const App = () => {

        const [theme, setTheme] = useState(darkTheme);

        const toggleTheme = () => {
            setTheme(theme === lightTheme ? darkTheme : lightTheme);
        };



    return (
        <Provider store={store}>
            <LanguageProvider>
                <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    <div className={css.main}>
                            <div className={css.mainContent}>
                                <Header />
                                <ServiceBar />

                                            <div className={css.mainContainer}>
                                                <div className={css.mainContainerSides}>
                                                    <LeftSidebar />
                                                </div>
                                                <div className={css.mainContainerCenter}>
                                                    <SectionContainer>
                                                        <Routes>
                                                                <Route index element={<Navigate to={'home'} />} />
                                                                <Route path={'home'} element={<MainLayout />} />
                                                                <Route path={'games'} element={<GamesLayout />} />
                                                                <Route path={'news'} element={<NewsLayout />} />
                                                                <Route path={'sign-up'} element={<SignUpLayout />} />
                                                                <Route path={'sign-in'} element={<SignInLayout />} />
                                                                <Route path={'admin-page'} element={<AdminLayout />} />
                                                                <Route path={'edit-profile'} element={<EditProfileLayout />} />
                                                                <Route path={'profile/:username'} element={<ProfileLayout />} />
                                                                <Route path={'gamePage/:id'} element={<GamePage />} />
                                                        </Routes>
                                                    </SectionContainer>
                                                </div>

                                            </div>
                            </div>

                        <ServiceSidebar />
                    </div>
                </ThemeProvider>
                </ThemeContext.Provider>
            </LanguageProvider>
        </Provider>
    );
}
