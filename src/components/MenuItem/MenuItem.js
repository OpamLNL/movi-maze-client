import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ThemeContext} from '../../themes/theme-context';
import './MenuItem.module.css';

const MenuItem = ({
                  name, className, size, onClick, disabled, ...attrs
              }) => {

    const theme = useContext(ThemeContext);

    // const menuItemStyle = {
    //     color: theme.palette.primary.contrastText, // Змінюємо колір відповідно до теми
    // };

    console.log(theme.palette.primary.contrastText);
    const classes = classNames(
        'fa',
        `fa-${name}`,
        { func: onClick },
        { disabled },
        theme,
        className,
    );

    const elemSize = size ? { fontSize: `${size}rem` } : null;

    return (
        <i
            {...attrs}
            className={classes}
            onClick={disabled ? null : onClick}
            style={elemSize}
        />
    );
};

MenuItem.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.number,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

MenuItem.defaultProps = {
    name: '',
    className: '',
    size: null,
    onClick: null,
    disabled: false,
};

export {MenuItem};

