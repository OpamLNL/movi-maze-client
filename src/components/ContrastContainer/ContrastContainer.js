import React, {useContext} from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ThemeContext } from '../../themes/theme-context';


export const ContrastContainer = ({ title, text, children }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <Paper elevation={3} style={{ padding: '16px', backgroundColor: '#fafafa' }} className={`contrast-container ${theme}`}>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body1">
                {text}
            </Typography>
            {children}
        </Paper>
    );
};

