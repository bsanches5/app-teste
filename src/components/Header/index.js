import React from "react";
import { BiSearch } from "react-icons/bi";
import "./styles.css";

const Header = () => {
  function clickMe() {
    console.log("You clicked me!");
  }

  return (
    <>
      <header>
        <div className="title-box">
          <div className="title">
            <div id="logo1">Lo</div>
            <div id="logo2">G</div>
            <div id="logo3">o</div>
          </div>
          <div id="subtitle">da empresa</div>
        <div id="menu-title"> Lista de usuários</div>
      </div>
        <div className="navbar">
          <button onClick={() => clickMe()}>Home</button>
          <button onClick={() => clickMe()}>Usuários</button>
          <button onClick={() => clickMe()}>Produtos</button>
          <button>
            <BiSearch />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
