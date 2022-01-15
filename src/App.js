import React, { useState, useEffect } from "react";
import "./App.css";

const App=() => {
  const [allUsers, setAllUsers] = useState([]);
  const [load] = useState("https://fakerapi.it/api/v1/users?_quantity=50");

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const res = await fetch(load);
    const user = await res.json();

    setAllUsers(user.data);
  };

  return (
    <>
    <h2>Lista de usuários</h2>
    <div className="app-container">
      {allUsers.map((values) => {
        return (
          <>
            <div className="box">
              <div className="content">
                <h1>{values.image}</h1>
                <h5>{values.firstname}</h5>
                <h5>{values.lastname}</h5>
                <p>{values.username}</p>
                <p>{values.email}</p>
                <h5>{values.website}</h5>
              </div>
            </div>
          </>
        );
      })}
    </div>
    </>
  );
}

export default App;
