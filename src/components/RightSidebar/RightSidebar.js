import React from 'react';
import css from './RightSidebar.module.css';
import {GameList} from "../GameList/GameList";
import {SectionContainer} from "../Containers";



const RightSidebar = () => {


    return (
        <SectionContainer title="Перелік ігор">
            <GameList />
        </SectionContainer>
    );
};

export { RightSidebar };
