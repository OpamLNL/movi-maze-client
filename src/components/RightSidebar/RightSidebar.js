import React from 'react';
import css from './RightSidebar.module.css';
import {GameList} from "../GameList/GameList";



const RightSidebar = () => {


    return (
        <div className={css.sidebar}>
            <GameList />
        </div>
    );
};

export { RightSidebar };
