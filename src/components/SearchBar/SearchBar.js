
import { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.text.contrastText,
            },
            '&:hover fieldset': {
                borderColor: 'blue',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#f7005e',
            },
        },
    },
}));



export const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery); // Функція onSearch повинна обробляти логіку пошуку
    };

    const classes = useStyles();
    return (
        <TextField className={classes.root}
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
            fullWidth
        />
    );
};


