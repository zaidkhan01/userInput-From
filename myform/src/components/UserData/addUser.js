import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./addUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/errorModal";
const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    // console.log(enteredAge, enteredName);
    props.onAddUser(enteredName, enteredAge);
    setEnteredAge("");
    setEnteredName("");
  };
  const userNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            value={enteredName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (YEARS)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={AgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
