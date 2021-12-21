import React from 'react';
// import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    /*first hooks => (useState) is used to set and assign a new value to varible.perhaps we've use old thing to assign value to llike this => title = "Updated!"*/

    /* const [title, setTilte] = useState(props.title);
     console.log('expense item will be evaluated');

     const clickHandler = () => {
        setTilte('Updated!');
        console.log(title);
    }; */

    return (
        <li>
            <Card className="expense-item">
                {/* below is the props.child content which appears on dispaly. */}
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">
                        ₹{props.amount}
                    </div>
                </div>
                {/* <button onClick={clickHandler}>change title</button> */}
            </Card>
        </li>
    );
}
export default ExpenseItem;