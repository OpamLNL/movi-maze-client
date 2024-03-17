import {useDispatch, useSelector} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


import { getGenres  } from '../../store/reducers/genres/genresSelectors';
import {useEffect, useState} from 'react';
import { fetchGenres} from '../../store/reducers/genres/genresActions';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));




const Filter = ({ onFilterChange, genre }) => {

    const dispatch = useDispatch();
    const genreList = useSelector(getGenres );
    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);

    const classes = useStyles();


    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedRating, setSelectedRating] = useState('');

    useEffect(() => {
        onFilterChange(selectedGenres, selectedYear, selectedRating);
    }, [selectedGenres, selectedYear, selectedRating, onFilterChange]);





    ///////////////////////////
    const handleGenreChange = (event) => {
        setSelectedGenres(event.target.value);
        onFilterChange(selectedGenres, selectedYear, selectedRating);
        onFilterChange(event.target.value);
    };

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
        onFilterChange(selectedGenres, selectedYear, selectedRating);
    };

    const handleRatingChange = (event) => {
        setSelectedRating(event.target.value);
        onFilterChange(selectedGenres, selectedYear, selectedRating);
    };


    return (
        <div>

            <FormControl className={classes.formControl}>
                <InputLabel id="genre-select-label"> </InputLabel>
                <Select
                    labelId="genre-select-label"
                    id="genre-select"
                    value={selectedGenres}
                    onChange={handleGenreChange}
                >
                    <MenuItem value="">All Genres</MenuItem>
                    {genreList.map((genre) => (
                        <MenuItem key={genre.id} value={genre.id}>
                            {genre.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

        </div>
    );
};

export {Filter};