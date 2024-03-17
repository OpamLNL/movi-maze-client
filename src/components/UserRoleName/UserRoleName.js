import React from 'react';
import PropTypes from 'prop-types';

const UserRoleName = ({ role, username }) => {
    return (
        <div className="userRoleName">
            {username}
            <span className="userRole">{role}</span>
            <span className="userName">{username}</span>
        </div>
    );
};

UserRoleName.propTypes = {
    role: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export { UserRoleName };