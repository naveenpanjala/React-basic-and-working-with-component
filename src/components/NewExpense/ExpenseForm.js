import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enterTitle, setTitle] = useState("");
  const [enterAmount, setAmount] = useState("");
  const [enterDate, setDate] = useState("");

  // const[userInput,setUserInput]=useState({
  //     title:'',
  //     amount:'',
  //     date:''
  // });

  const handelTitleChanged = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     title:event.target.value
    // })

    // setUserInput((prevState)=>{
    //     return{...prevState,title:event.target.value}
    // })
  };

  const handelAmountChanged = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     amount:event.target.value
    // })
  };

  const handelDateChanged = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     date:event.target.value
    // })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData)
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onClick={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={handelTitleChanged} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={handelAmountChanged}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={handelDateChanged}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
