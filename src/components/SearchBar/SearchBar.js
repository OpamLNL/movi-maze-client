import React, { useState, useEffect } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import WebkitSpeechRecognizer from '../../services/WebkitSpeechRecognizer';

export const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [recognizer, setRecognizer] = useState(null);

    useEffect(() => {
        const speechRecognizer = new WebkitSpeechRecognizer();
        speechRecognizer.onResult((result) => {
            setSearchQuery(result);
        });
        speechRecognizer.onError((error) => {
            console.error('Speech recognition error:', error);
            setIsListening(false);
        });
        speechRecognizer.onEnd(() => {
            setIsListening(false);
        });
        setRecognizer(speechRecognizer);
    }, []);

    const handleSearch = () => {
        onSearch(searchQuery);
        if (isListening) {
            recognizer.stop();
            setIsListening(false);
        }
    };

    const handleMicClick = () => {
        if (isListening) {
            recognizer.stop();
        } else {
            recognizer.start();
        }
        setIsListening(!isListening);
    };

    return (
        <TextField
            label="Пошук"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleSearch}>
                            <SearchIcon />
                        </IconButton>
                        <IconButton onClick={handleMicClick}>
                            {isListening ? <MicIcon /> : <MicOffIcon />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            fullWidth
        />
    );
};

