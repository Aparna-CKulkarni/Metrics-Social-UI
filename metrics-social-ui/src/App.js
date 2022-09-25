import React from "react";
// import "./styles.css";
import SideNavBar from "./components/sidenav";
import HeaderBar from "./components/header-bar";
import Cards from "./components/cards";

export default function App() {
  return (
    <div>
      <HeaderBar />
      <div className="container">
        <SideNavBar />
        <div className="card-layout">
          <Cards />
        </div>
      </div>
    </div>
  );
}