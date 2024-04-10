import { useState, useEffect } from 'react';
import { FormControlLabel, FormGroup, Switch, styled } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

import WebkitSpeechRecognizer from '../../services/WebkitSpeechRecognizer';

// Стилізація Switch за межами компонента
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    // ...стилізація
    // Ви можете налаштувати стилі так, як вам потрібно
}));

const MicrophoneSwitcher = () => {
    const [isMicOn, setIsMicOn] = useState(false);
    const [transcript, setTranscript] = useState('');
    const speechRecognizer = new WebkitSpeechRecognizer();

    useEffect(() => {
        // Створення івент-хендлерів при монтуванні компонента
        speechRecognizer.onResult((result) => {
            setTranscript(result);
        });
        speechRecognizer.onError((error) => {
            console.error(error);
        });

        // Прибирання івент-хендлерів при демонтуванні компонента
        return () => {
            speechRecognizer.stop();
        };
    }, []);

    const handleMicChange = () => {
        if (!isMicOn) {
            speechRecognizer.start();
        } else {
            speechRecognizer.stop();
        }
        setIsMicOn(!isMicOn);
    };

    // Виведення транскрипта може бути додано якщо потрібно
    // console.log(transcript);

    return (
        <FormGroup>
            <FormControlLabel
                control={<MaterialUISwitch checked={isMicOn} onChange={handleMicChange} />}
                label={isMicOn ? 'Microphone On' : 'Microphone Off'}
                labelPlacement="start"
            />
            {/* Можливо відображення транскрипту */}
            <div>
                {transcript}
            </div>
        </FormGroup>
    );
}

export { MicrophoneSwitcher };
