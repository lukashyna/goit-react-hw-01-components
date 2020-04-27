import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryTextrow from './transactionHistoryTextrow';
import styles from './transactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr className={styles.headRow}>
        <th className={styles.title}>Type</th>
        <th className={styles.title}>Amount</th>
        <th className={styles.title}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <TransactionHistoryTextrow transaction={transaction} key={transaction.id} />
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TransactionHistory;
