import React, { useState } from "react";
import AddUser from "./components/UserData/addUser";
import UserList from "./components/UserData/userList";
const App = () => {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
