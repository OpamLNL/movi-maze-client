import css from './LeftSidebar.module.css';
import {UserList} from "../UserList/UserList";
import {makeStyles} from "@material-ui/core/styles";
import {SectionContainer} from "../Containers";
import {GameList} from "../GameList/GameList";
import React from "react";

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
        <SectionContainer title="Перелік ігор">
            <GameList />
        </SectionContainer>
    );
};

