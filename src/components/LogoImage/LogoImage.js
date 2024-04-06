import css from './LogoImage.module.css';

export const LogoImage = ({logoUrl}) => {

    return (
            <img src={logoUrl} alt="Movi-Maze" className={css.logoImage}/>
    );
};

