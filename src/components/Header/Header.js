import {useContext} from 'react';
import css from './Header.module.css';

import {Typography} from '@mui/material';

import {ThemeContext} from '../../themes/theme-context';

import {ContrastContainer, LogoCard, MainMenu, UserProfile} from '../../components';
import {useSelector} from "react-redux";
import {selectUsers} from "../../store/reducers/users/usersSelectors";



const Header = () =>{
    const {theme} = useContext(ThemeContext);


return(
        <ContrastContainer className={css.header}>
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


        </ContrastContainer>
);
}

export {Header};