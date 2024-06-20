import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { fetchTags } from '../../store/reducers/tags/tagsActions';
import {TagBadge} from "../TagBadge/TagBadge";

const useStyles = makeStyles((theme) => ({
    tagCloud: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: "5px",
        padding: "5px",
    },
    chip: {
        fontSize: '1rem',
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    error: {
        color: 'red',
        textAlign: 'center',
    },
}));

export const TagCloud = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const tagsData = useSelector((state) => state.tags);

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    if (tagsData.loading) {
        return <div className={classes.loading}><CircularProgress /></div>;
    }

    if (tagsData.error) {
        return <Typography className={classes.error}>Error: {tagsData.error}</Typography>;
    }

    const tagIds = tagsData.tags.map(tag => tag.id).join(',');


    return (
        <div className={classes.tagCloud}>
                <TagBadge
                    tagIds = {tagIds}
                />
        </div>
    );
};

