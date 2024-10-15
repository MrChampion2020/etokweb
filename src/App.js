import React from "react";

import "./App.css";
import Navigation from "./navigation/Navigation";
import Modal from "react-modal";
import { AuthProvider } from "./AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <>
          <Navigation />
          <Modal />
        </>
      </AuthProvider>
    </>
  );
}

export default App;

