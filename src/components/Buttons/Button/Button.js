import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(1, 5),
        fontSize: '1.8rem',
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        borderRadius: '5px',
        transition: 'background-color 0.3s, box-shadow 0.3s, transform 0.3s',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)',
            transform: 'translateY(-2px)',
        },
        '&[disabled]': {
            backgroundColor: '#CCCCCC',
            color: '#666666',
            cursor: 'not-allowed',
            boxShadow: 'none',
        },
        '&.active': {
            backgroundColor: '#FF4081',
            boxShadow: '0px 4px 10px rgba(255, 64, 129, 0.5)',
        },
    },
}));




const Button = ({
                    children, onClick, className, disabled, active, ...attrs
                }) => {
    const onClickAction = (e) => {
        if (disabled) {
            e.preventDefault();
        } else {
            return onClick(e);
        }
    };

    const classesStyled = useStyles();

    const classes = classNames(
        classesStyled.button,
        className,
        { active },
    );

    const Tag = attrs.href ? 'a' : 'button';

    return (
        <Tag
            className={classes}
            disabled={disabled}
            onClick={onClickAction}
            {...attrs}
        >
            {children}
        </Tag>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
};

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
    active: false,
};

export { Button };
