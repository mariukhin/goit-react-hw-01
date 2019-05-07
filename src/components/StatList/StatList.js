import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatList.module.css';
import getRandomColor from '../randomColor';

const StatList = ({ stats }) => (
  <ul className={styles.statList}>
    {stats.map(item => (
      <li
        className={styles.statListItem}
        key={item.id}
        style={{ backgroundColor: getRandomColor() }}
      >
        <span className={styles.label}>{item.label}</span>
        <span className={styles.percentage}>{item.percentage}%</span>
      </li>
    ))}
  </ul>
);

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default StatList;
