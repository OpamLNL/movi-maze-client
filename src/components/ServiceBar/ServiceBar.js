import {SectionContainer} from "../Containers";
import css from "../../App.module.css";
import {LanguageSwitcher} from "../LanguageSwitcher/LanguageSwitcher";
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import {SearchBar} from "../SearchBar/SearchBar";

export const ServiceBar = () => {

    return (
        <SectionContainer>
            <div className={css.settingItem}>
                <LanguageSwitcher />
            </div>
            <div className={css.settingItem}>
                <ThemeSwitcher />
            </div>
            <div>
                <SearchBar />
            </div>
        </SectionContainer>
    );
};


