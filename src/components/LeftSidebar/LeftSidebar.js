import css from './LeftSidebar.module.css';
import {UserList} from "../UserList/UserList";
import {makeStyles} from "@material-ui/core/styles";
import {SectionContainer} from "../Containers";

const useStyles = makeStyles((theme) => ({
    sidebar: {
        padding: "2px 2px 2px 2px",
        width: "98%",

        backgroundColor: theme.palette.background.paper,
    },
}));

export const LeftSidebar = () => {

    const classes = useStyles();
    return (
            <SectionContainer title="Зараз на сайті">
                <UserList />
            </SectionContainer>
    );
};

