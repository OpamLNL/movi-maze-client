import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTags } from "../../store/reducers/tags/tagsSelectors";
import { fetchTags } from "../../store/reducers/tags/tagsActions";
import { Button, Icon } from "../../components";
import Badge from '@mui/material/Badge';
import { LanguageContext } from "../../language/language-context";

import css from './TagBadge.module.css';

export const TagBadge = ({ tagIds }) => {


    const language = useContext(LanguageContext);
    const dispatch = useDispatch();
    const tags = useSelector(getTags);


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
                        // <Button key={tag.id} style={{ marginRight: '20px', widths: '2px' }}>
                            // {/*<Icon name="tag" />*/}
                             <Badge  key={tag.id} className={css.badge}>
                                 {tag.name}
                             </Badge>
                         // </Button>
                    ))
            ) : (
                <div >...</div>
            )}
        </div>
    );
}

