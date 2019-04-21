import React from 'react';
import PropTypes from 'prop-types';
import StatList from '../StatList/StatList';
import styles from './StatsSection.module.css';

const StatsSection = ({ stats, title }) => (
  <section className={styles.statsSection}>
    <h2 className={styles.title}>{title}</h2>
    <StatList stats={stats} />
  </section>
);

StatsSection.defaultProps = {
  title: ' ',
};
StatsSection.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  title: PropTypes.string,
};
export default StatsSection;
