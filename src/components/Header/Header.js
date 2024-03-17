import {Typography} from '@mui/material';

import css from './Header.module.css';

import {GenreList, LogoCard, MainMenu, UserInfo} from '../../components';


import React, {useContext} from 'react';
import {ThemeContext} from '../../themes/theme-context';
import {Link} from "react-router-dom";


const Header = () =>{
    const {theme} = useContext(ThemeContext);

return(
        <div className={css.header}>

            <div className={css.headerLogo}>
                <LogoCard />

            </div>

            <div className={css.headerMid}>
                    <div className={css.headerText}>
                            <Typography variant="h5" component="h2" color={theme.palette.primary.contrastText}>
                                MOVE MAZE
                            </Typography>
                    </div>
                <div>
                    <MainMenu />
                </div>

            </div>

            <div className={css.headerProfile}>
                <UserInfo avatarUrl ={'images/move-maze-logo.png'} name ={'MOVE MAZE'} email ={'move_maze@mmh.com'}/>
            </div>
        </div>
);
}

export {Header};