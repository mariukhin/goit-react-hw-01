import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.module.css';

const Description = ({ alt, avatar, name, tag, location }) => (
  <div className={styles.description}>
    <img className={styles.avatar} alt={alt} src={avatar} />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
);

Description.defaultProps = {
  alt: 'user avatar',
};
Description.propTypes = {
  alt: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
export default Description;
