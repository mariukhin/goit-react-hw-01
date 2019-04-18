import React from 'react';
import PropTypes from 'prop-types';

const Description = ( {alt, avatar, name, tag, location} ) =>(
    <div className="description">
        <img className="avatar" alt={ alt } src={avatar} />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
    </div>
);

Description.defaultProps = {
    alt: "user avatar",
};
Description.propTypes = {
    alt: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
};
export default Description;