import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    /* two approach of taking value from the user. first 1 is blocked single-single and the second one is in the form of Object like i done below.  */

    const [enteredTitle, SetenteredTitle] = useState('');
    const [enteredAmount, SetenteredAmount] = useState('');
    const [enteredDate, SetenteredDate] = useState('');

    /* const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    }); */

    const titleChangeHandler = (event) => {
        SetenteredTitle(event.target.value);
        /*  setUserInput({
             ...userInput,
             enteredTitle: event.target.value,
         }); */
        /* setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        }); */
    }
    const AmountChangeHandler = (event) => {
        SetenteredAmount(event.target.value);
        /*  setUserInput({
             ...userInput,
             enteredAmount: event.target.value,
         }); */
    }
    const DateChangeHandler = (event) => {
        SetenteredDate(event.target.value);
        /*setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        }); */
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        /* these things below helps to empty the input tags after getting the value from it */
        SetenteredTitle('');
        SetenteredAmount('');
        SetenteredDate('');
    };
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step='0.01' value={enteredAmount} onChange={AmountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="01-01-2020" max='31-12-2022' value={enteredDate} onChange={DateChangeHandler} />
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'> Add Expense</button>
            </div>
        </div>
    </form>
}
export default ExpenseForm;