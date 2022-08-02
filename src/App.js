import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const adduserHandler = (name, age) => {
    setUsersList((prev)=>{
      return [...prev, {name: name, age: age, id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAdduser={adduserHandler}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
