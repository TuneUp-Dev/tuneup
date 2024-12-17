import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Router";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
