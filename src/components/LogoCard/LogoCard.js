import css from './LogoCard.module.css';

import {Link} from "react-router-dom";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@mui/material';

import { LogoImage } from '../../components';

const useStyles = makeStyles((theme) => ({
    paper: {
        color: theme.palette.text.contrastText,
        backgroundColor: "#1e1633",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
    },
}));

export const LogoCard = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={`${classes.paper} ${css.logoCard}`}>

                <Link to="/home">
                    <LogoImage logoUrl={'images/move-maze-logo.png'} />
                </Link>

            {!isMobile && (
                <Typography variant="h6" className={css.logoCardText}>
                    грай-рушай
                </Typography>
            )}
        </div>
    );
};

