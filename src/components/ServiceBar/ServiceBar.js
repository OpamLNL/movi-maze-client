import {SectionContainer} from "../Containers";
import css from "./ServiceBar.module.css";
import {LanguageSwitcher} from "../LanguageSwitcher/LanguageSwitcher";
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import {SearchBar} from "../SearchBar/SearchBar";
import {MicrophoneSwitcher} from "../MicrophoneSwitcher/MicrophoneSwitcher";

export const ServiceBar = () => {

    return (
        <SectionContainer className={css.container}>

            <div className={css.switcherContainer}>
                <div className={css.settingItem}>
                    <LanguageSwitcher />
                </div>
                <div className={css.settingItem}>
                    <ThemeSwitcher />
                </div>
            </div>
                <SearchBar />

        </SectionContainer>
    );
};


