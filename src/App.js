import React from "react";
import NewsFeed from "./Components/NewsFeed";
import Sidebar from "./Sidebar";
import Widgets from "./Components/Widgets";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <NewsFeed />
      <Widgets />
    </div>
  );
};

export default App;
