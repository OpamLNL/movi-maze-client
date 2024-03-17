import React, {useContext, useState} from 'react';

import { Switch, FormControlLabel } from '@material-ui/core';
import {FormGroup, styled} from '@mui/material';

import { LanguageContext } from '../../language/language-context';


const LanguageSwitcher = () => {
    const { toggleLanguage} = useContext(LanguageContext);
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
        toggleLanguage();
    };

///картинки прапорів ще треба допрацювати
    //// і взагалі винести перемикач в окремий компонент, але не встигаю
    const MaterialUISwitch = styled(Switch)(({theme}) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
            margin: 1,
            padding: 0,
            transform: 'translateX(6px)',
            '&.Mui-checked': {
                color: '#fff',
                transform: 'translateX(22px)',
                '& .MuiSwitch-thumb:before': {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 4 3"><rect x="0" y="0" width="2" height="3" fill="%23009BEE" /><rect x="2" y="0" width="2" height="3" fill="%23FFD500" /></svg>')`,

                },
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
            width: 32,
            height: 32,
            '&:before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 14 9"><path fill="${encodeURIComponent('#012169')}" d="M0 0h14v9H0z"/><path fill="${encodeURIComponent('#fff')}" d="M0 0h6v9H0z"/><path fill="${encodeURIComponent('#c8102e')}" d="M8 0h6v9H8z"/></svg>')`,

            },
        },

        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            borderRadius: 20 / 2,
        },
    }));


    return (
        <FormGroup>
            <FormControlLabel
                control={<MaterialUISwitch sx={{m: 1}}/>}
                checked={checked}
                onChange={handleChange}
            />
        </FormGroup>
    );
}

export {LanguageSwitcher};

