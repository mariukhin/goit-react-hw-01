import React from 'react';
import PropTypes from 'prop-types';
import StatItem from '../StatItem/StatItem';
import styles from './Stats.module.css';

const Stats = ({ stats }) => (
  <ul className={styles.stats}>
    <StatItem label="Followers" quantity={stats.followers} />
    <StatItem label="Views" quantity={stats.views} />
    <StatItem label="Likes" quantity={stats.likes} />
  </ul>
);

// Stats.defaultProps = {
//   stats: {},
// };
Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Stats;
