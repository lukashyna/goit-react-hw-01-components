import React from 'react';
import PropTypes from 'prop-types';
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
        <tr className={styles.textRow} key={transaction.id}>
          <td className={styles.text}>{transaction.type}</td>
          <td className={styles.text}>{transaction.amount}</td>
          <td className={styles.text}>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
export default TransactionHistory;
