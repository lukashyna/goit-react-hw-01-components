import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './statistical-dataItem';
import styles from './statistical-data.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>Upload stats</h2>}
    <ul className={styles.statList}>
      {stats.map(stat => (
        <StatisticItem stat={stat} key={stat.id} />
      ))}
    </ul>
  </section>
);
Statistics.defaultProps = {
  title: undefined,
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Statistics;
