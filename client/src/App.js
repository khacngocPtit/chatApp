import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";

import Login from "./Components/Authencation/Login";
import Register from "./Components/Authencation/Register";
import ChatPage from "./Components/ChatPage";

function App() {
  return (
    <div className="App">
      <Container>
        <Login />
        <Register />
        <ChatPage />
      </Container>
    </div>
  );
}

export default App;
