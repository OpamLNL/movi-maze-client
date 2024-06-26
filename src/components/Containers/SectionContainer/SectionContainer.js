import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: "15px 2px 2px 2px",
        padding: "10px",
        width: "98%",
        color: theme.palette.text.contrastText,
        backgroundColor: theme.palette.primary.dark,
        justifyContent: "center",
    },
}));

export const SectionContainer = ({ title, children, className }) => {
    const classes = useStyles();
    const combinedClassNames = `${classes.paper} ${className}`;
    return (
        <Paper className={combinedClassNames} >
            <Typography variant="h6" component="div">
                {title}
            </Typography>
            {children}
        </Paper>
    );
};
