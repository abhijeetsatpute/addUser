import { useState } from 'react';
import React from 'react';
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList)=>{
      return [...prevUserList , {"name":uName,"age":uAge}];
    })
  }
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App;
