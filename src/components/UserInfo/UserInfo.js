import {useContext} from 'react';

import css from './UserInfo.module.css';

import {Avatar, Typography} from "@mui/material";
import {ThemeContext} from "../../themes/theme-context";

const UserInfo = ({name, email, avatarUrl}) => {
    const {theme} = useContext(ThemeContext);

    return(
                <div className={css.userCard}>

                    <Avatar
                        alt="Remy Sharp"
                        src= {avatarUrl}
                        sx={{ width: 56, height: 56 }}
                    />
                    <div className={css.userCardText}>
                        <Typography  component={theme.components.MuiTypography.defaultProps.variantMapping.subtitle1} color={theme.palette.primary.contrastText}>
                            {name}
                            <br/>
                            {email}
                        </Typography>
                    </div>
                </div>
    );
};

// UserInfo.propTypes = {
//     name: PropTypes.string,
//     size: PropTypes.number,
//     onClick: PropTypes.func,
//     disabled: PropTypes.bool,
// };

export {UserInfo};