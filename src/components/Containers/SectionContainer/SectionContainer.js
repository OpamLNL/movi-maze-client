import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@mui/material/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "15px 2px 2px 2px",
        padding: "10px",
        width: "98%",
        color: theme.palette.text.contrastText,
        backgroundColor: theme.palette.primary.contrast,
        justifyContent: "center",
    },
}));

export const SectionContainer = ({ title, children }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" component="div">
                {title}
            </Typography>
            {children}
        </Paper>
    );
}
