import React from 'react';
import PropTypes from 'prop-types';
import styles from './transactionHistoryTextrow.module.css';

const TransactionHistoryTextrow = ({ transaction }) => (
  <tr className={styles.textRow} key={transaction.id}>
    <td className={styles.text}>{transaction.type}</td>
    <td className={styles.text}>{transaction.amount}</td>
    <td className={styles.text}>{transaction.currency}</td>
  </tr>
);
TransactionHistoryTextrow.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
export default TransactionHistoryTextrow;
