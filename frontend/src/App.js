import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    console.log("test");
    getUserName();
  }, []);

  const getUserName = async () => {
    const response = await axios.get("/names");
    console.log(response);
    setUserName(response.data);
  };

  return (
    <div>
      <h1>My website</h1>
      <h1>my user name is {userName}</h1>
    </div>
  );
}

export default App;
