import React from 'react'
import PropTypes from 'prop-types'
import Transaction from './Tansaction'
import style from './transactionHistory.module.css'

const TransactionHistory = ({items}) => 
<table className={style.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
        {items.map(({type, amount, currency, id}) => 
            <tr key={id}>
            <Transaction
                type={type} 
                amount={amount} 
                currency={currency} 
                />
            </tr>
    )}
  </tbody>
</table>

TransactionHistory.propTypes={
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })).isRequired
}


export default TransactionHistory