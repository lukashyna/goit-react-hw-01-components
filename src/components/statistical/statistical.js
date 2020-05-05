import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './statisticalItem';
import styles from './statistical.module.css';

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

Statistics.propTypes = {
  /* eslint-disable-next-line */
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Statistics;
