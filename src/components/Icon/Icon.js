import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ThemeContext} from '../../themes/theme-context';
import './Icon.css';

const Icon = ({
                  name, className, size, onClick, disabled, ...attrs
              }) => {

    const theme = useContext(ThemeContext);

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

Icon.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.number,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

Icon.defaultProps = {
    name: '',
    className: '',
    size: null,
    onClick: null,
    disabled: false,
};

export {Icon};

