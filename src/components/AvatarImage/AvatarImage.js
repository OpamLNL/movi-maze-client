import css from './Avatar.module.css';


const AvatarImage = ({avatarUrl}) => {

    return (
            <img src={avatarUrl} alt="Avatar" className={css.avatarImage}/>
    );
};

export {AvatarImage};