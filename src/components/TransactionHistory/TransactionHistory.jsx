import React from 'react';
import css from './TransactionHistory.module.css';
import PropTypes from "prop-types";

const TransactionHistory = ({transactions}) => {
  return (
    
    <table className={css.transaction__history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}

      </tbody>
    </table>
  );
};

TransactionHistory.prototype = {
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      })
    ).isRequired,
  };

export default TransactionHistory;
