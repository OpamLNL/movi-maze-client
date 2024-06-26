import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: "2px",
        width: "98%",
        margin: "10px",

        display: "flex",
        flexDirection: "row",
        cursor: "pointer",
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.dark,
        border: "1px solid",
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
            borderColor: theme.palette.primary.contrastText,
            border: "1px solid",
        },
    },
}));


export const UserListItem = ( {children}) => {

    const classes = useStyles();

    return (
        <div className={classes.listItem}>
            {children}
        </div>
    );
};