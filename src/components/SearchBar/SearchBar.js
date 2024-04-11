import React, { useState, useEffect } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import WebkitSpeechRecognizer from '../../services/WebkitSpeechRecognizer';

const speechRecognizer = new WebkitSpeechRecognizer();

export const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        speechRecognizer.onResult((result) => {
            setSearchQuery(result);
            speechRecognizer.stop();
        });
        speechRecognizer.onError((error) => {
            console.error('Speech recognition error:', error);
            setIsListening(false);
        });
        speechRecognizer.onEnd(() => {
            setIsListening(false);
            speechRecognizer.stop();
        });

        return () => {
            speechRecognizer.stop();
        };
    }, []);

    const handleSearch = () => {
        onSearch(searchQuery);
        speechRecognizer.stop();
        setIsListening(false);
    };

    const handleMicClick = () => {
        if (isListening) {
            speechRecognizer.stop();
        } else {
            speechRecognizer.start();
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
