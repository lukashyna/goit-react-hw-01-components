import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistical-data.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title !== undefined && <h2 className={styles.title}>Upload stats</h2>}
    <ul className={styles.statList}>
      {stats.map(stat => (
        <li key={stat.id} className={styles.item}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default Statistics;
