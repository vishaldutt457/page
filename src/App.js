import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
      <Feed/>
    </div>
  );
}

export default App;
