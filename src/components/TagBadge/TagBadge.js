import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTags } from "../../store/reducers/tags/tagsSelectors";
import { fetchTags } from "../../store/reducers/tags/tagsActions";
import { Badge, Button, Icon } from "../../components";
import { LanguageContext } from "../../language/language-context";

import css from './TagBadge.module.css';

export const TagBadge = ({ tagIds }) => {
    const language = useContext(LanguageContext);
    const dispatch = useDispatch();
    const tags = useSelector(getTags);

    // Fetch tags once on component mount
    useEffect(() => {
        if (!tags.length) {
            dispatch(fetchTags(language.language));
        }
    }, [dispatch, language.language, tags.length]);

    // Filter and map the tag names using the passed tagIds
    const tagNames = tags.filter(tag => tagIds.includes(tag.id));

    return (
        <div className={css.tagsBadgeList}>
            {tagNames.map(tag => (
                <Button key={tag.id} style={{ marginRight: '20px' }}>
                    <Icon name="tag" />
                    <Badge circle alert value={tag.name} />
                </Button>
            ))}
        </div>
    );
}

