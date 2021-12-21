import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Holy!",
    amount: 400,
    date: new Date(2021, 11, 10),
  },
  {
    id: 2,
    title: "Lohri!",
    amount: 410,
    date: new Date(2021, 11, 10),
  },
  {
    id: 3,
    title: "Diwali!",
    amount: 390,
    date: new Date(2021, 11, 10),
  },
  {
    id: 4,
    title: "New Season!",
    amount: 420,
    date: new Date(2021, 11, 10),
  },
];

const App = () => {
  /* Below is the dummy Content */
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  /* below code is dynamic code */
  const addExpenseHandler = expense => {
    /* console.log('in app.js');
    console.log(expense); */
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
export default App;