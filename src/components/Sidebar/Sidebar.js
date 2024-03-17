import React, {useEffect, useState} from 'react';
import css from './Sidebar.module.css';
import axios from "axios"; // Вам може знадобитися відповідний імпорт для вашого CSS модуля
import config from '../../config';
import {UserList} from "../UserList/UserList";
import {GameList} from "../GameList/GameList";







const Sidebar = () => {


    return (
        <div className={css.sidebar}>
            <UserList />

            <div className={css.sidebarItem}>Пункт меню 1</div>
            <div className={css.sidebarItem}>Пункт меню 2</div>
            {/* Додайте інші пункти меню за потребою */}
        </div>
    );
};

export { Sidebar };
