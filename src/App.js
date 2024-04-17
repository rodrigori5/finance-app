import React, { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const addTransaction = () => {
    if (text.trim() === '' || amount === 0) return;

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    };

    setTransactions([...transactions, newTransaction]);
    setText('');
    setAmount(0);
  };

  const getTotalBalance = () => {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
  };

  return (
    <div>
      <h2>Personal Finance App</h2>
      <div>
        <h3>Add New Transaction</h3>
        <div>
          <label>Transaction Name</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter transaction name..."
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button onClick={addTransaction}>Add Transaction</button>
      </div>
      <div>
        <h3>Transactions</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.text} - ${transaction.amount}
            </li>
          ))}
        </ul>
      </div>
      <h3>Total Balance: ${getTotalBalance()}</h3>
    </div>
  );
}

export default App;
