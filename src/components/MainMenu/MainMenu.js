import css from './MainMenu.module.css';

import { useContext } from 'react';
import menuItemsLinks  from './menuItemLinks';
import menuItemsLocales from './menuItemLocales';

import { Button, Icon } from '../../components';
import { LanguageContext } from "../../language/language-context";
import {Link} from "react-router-dom";

const MainMenu = () => {

    const language = useContext(LanguageContext);

    return (
        <div>
            <div className={css.mainMenuBlock}>
                {menuItemsLinks.map(menuItem => (
                    <Link key={menuItem.id} to={menuItem.link}>
                        <Button style={{ marginRight: '20px' }}>
                            <Icon name="inbox" />
                            <span>{menuItemsLocales.find(item => item.id === menuItem.id)?.label[language.language]}</span>
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export {MainMenu};