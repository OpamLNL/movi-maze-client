import css from './LogoImage.module.css';

export const LogoImage = ({logoUrl}) => {

    return (
            <img src={'images/move-maze-logo.png'} alt="Movi-Maze" className={css.logoImage}/>
    );
};

