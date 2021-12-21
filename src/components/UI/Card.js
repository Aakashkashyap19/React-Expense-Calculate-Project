import React from 'react';
import "./Card.css";

const Card = (props) => {
    const classes = 'card ' + props.className;

    /* its the reserved props.children name. i.e usually use to show the content on display. like below i,ve done it.*/
    return <div className={classes}>{props.children}</div>;
}
export default Card;