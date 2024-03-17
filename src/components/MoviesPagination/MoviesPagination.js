import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const MoviesPagination = ({ moviesPerPage, totalMovies, paginate, currentPage }) => {

    const classes = useStyles();

    const handleChange = (event, value) => {
        paginate(value);
    };

    return (
        <div className={classes.root}>
            {/*less than 500 pages*/}
            <Pagination count={Math.min(Math.ceil(totalMovies / moviesPerPage), 500)}  onChange={handleChange} />
        </div>
    );
};

export {MoviesPagination};