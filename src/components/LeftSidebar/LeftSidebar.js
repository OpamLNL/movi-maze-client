import css from './LeftSidebar.module.css';
import {UserList} from "../UserList/UserList";
import {makeStyles} from "@material-ui/core/styles";
import {SectionContainer} from "../Containers";

const useStyles = makeStyles((theme) => ({
    sidebar: {
        padding: "2px 2px 2px 2px",
        width: "98%",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.paper,
    },
}));

export const LeftSidebar = () => {

    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            <SectionContainer>
                <UserList />

                <div className={css.sidebarItem}>Пункт меню 1</div>
                <div className={css.sidebarItem}>Пункт меню 2</div>
            </SectionContainer>
        </div>
    );
};

