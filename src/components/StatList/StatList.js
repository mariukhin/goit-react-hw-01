import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatList.module.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

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
