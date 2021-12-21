import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no Expenses.</h2>
    }
    /*below code is dynamic code and also used the ternary operator for conditional */
    return <ul className="expenses-list">
        {
            (props.items.map((expense) => (
                <ExpenseItem
                    /* index.js:1 Warning: Each child in a list should have a unique "key" prop.this is why here added the key. it gaves the unique id each content */
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )))
        }
    </ul>
}
export default ExpensesList;