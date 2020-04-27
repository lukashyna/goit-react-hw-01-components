import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistical-dataItem.module.css';

const StatisticItem = ({ stat }) => (
  <li key={stat.id} className={styles.item}>
    <span className={styles.label}>{stat.label}</span>
    <span className={styles.percentage}>{stat.percentage}%</span>
  </li>
);
StatisticItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
export default StatisticItem;
