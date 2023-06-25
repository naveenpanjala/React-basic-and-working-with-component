import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItems = (props) => {
 
  const[title, setTitle] = useState(props.title)
  // let title = props.title
  const handleClick =()=>{
    // title = "update"
    setTitle("Updated")
    console.log(title);
  };

  return (
    <Card className="expense-item">
    <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItems;
