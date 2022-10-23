import React from "react";
import Card from "../UI/Card";
import classes from "./userList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={props.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
