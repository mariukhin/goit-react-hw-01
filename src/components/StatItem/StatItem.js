import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatItem.module.css';

const StatItem = ({ label, quantity }) => (
  <li className={styles.statItem}>
    <span className={styles.label}>{label}</span>
    <span className={styles.quantity}>{quantity}</span>
  </li>
);

// StatItem.defaultProps = {
//   label: '',
//   quantity: 0,
// };
StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
export default StatItem;
