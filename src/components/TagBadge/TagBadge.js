import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTags } from "../../store/reducers/tags/tagsSelectors";
import { fetchTags } from "../../store/reducers/tags/tagsActions";
import Badge from '@mui/material/Badge';
import { LanguageContext } from "../../language/language-context";

import css from './TagBadge.module.css';
import {useNavigate} from "react-router-dom";

export const TagBadge = ({ tagIds }) => {


    const language = useContext(LanguageContext);
    const dispatch = useDispatch();
    const tags = useSelector(getTags);
    const navigate = useNavigate();

    const handleBadgeClick = (id) => {
        navigate(`/search-result/${id}`);
    };

    useEffect(() => {
        if (!tags.length) {
            dispatch(fetchTags(language.language));
        }
    }, [dispatch, language.language, tags.length]);



    const tagNames = tags.filter(tag => tagIds.includes(tag.id.toString()));

    return (
        <div className={css.tagBadgeList}>
            {tagNames.length > 0 ? (
                tagNames
                    .map(tag => (
                             <Badge  key={tag.id} className={css.badge} onClick={() => handleBadgeClick(tag.id)}>
                                 {tag.name}

                             </Badge>
                    ))
            ) : (
                <div >...</div>
            )}
        </div>
    );
}

