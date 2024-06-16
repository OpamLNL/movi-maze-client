import {useContext} from 'react';

import css from './UserInfo.module.css';
import {Avatar, Typography} from "@mui/material";
import {ThemeContext} from "../../themes/theme-context";
import {RoundButton} from "../Buttons";
import {useNavigate} from "react-router-dom";
import {apiBaseURL, avatarsURL} from "../../configs/urls";


const IMG_API = apiBaseURL + avatarsURL;

const UserInfo = ({user}) => {
    const {theme} = useContext(ThemeContext);
    console.log(localStorage.getItem('user'));
    const navigate = useNavigate();

    console.log(user);
    return(
                <div className={css.userCard}>

                    <RoundButton onClick={() => navigate(`/profile/${encodeURIComponent(user.username)}`)}>
                        <Avatar
                            src={IMG_API + user.avatar}
                            sx={{ width: 24, height: 24 }}
                        />
                    </RoundButton>
                    <div className={css.userCardText}>
                        <Typography
                            component={theme.components.MuiTypography.defaultProps.variantMapping.subtitle1}
                            color={theme.palette.primary.contrastText}>
                            {user.name}
                            <br/>
                            {user.email}
                        </Typography>
                    </div>
                </div>
    );
};


export {UserInfo};