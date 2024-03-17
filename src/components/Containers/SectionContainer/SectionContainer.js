import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "15px 2px 2px 2px",
        padding: "10px",
        width: "98%",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.paper,
    },
}));

export const SectionContainer = ({ children }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            {children}
        </Paper>
    );
}
