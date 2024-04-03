
import { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery); // Функція onSearch повинна обробляти логіку пошуку
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
                    </InputAdornment>
                ),
            }}
            fullWidth // Розтягує компонент на всю ширину батьківського елемента
        />
    );
};


