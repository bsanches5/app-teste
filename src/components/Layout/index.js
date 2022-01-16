import React, { useState, useEffect } from "react";
import "./styles.css";

const Layout = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [load] = useState("https://fakerapi.it/api/v1/users?_quantity=30");

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
      <div className="container">
        {allUsers.map((values) => {
          return (
            <>
              <div className="box">
                <div className="content">
                  <img src={values.image} alt="produto" />
                  <div className="box-text">
                    <div className="nome-completo">
                      {values.firstname} {values.lastname}
                    </div>
                    <div className="user-infos">
                      <div id="usuario">
                        Usuário: <strong>{values.username}</strong>
                      </div>
                      <div id="email">
                        E-mail: <strong>{values.email}</strong>
                      </div>
                    </div>
                    <div id="website">
                      <a href={values.website}>{values.website}</a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Layout;
