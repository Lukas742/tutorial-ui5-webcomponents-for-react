import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";
import { MyApp } from "./components/MyApp";

function App() {
  return (
    <HashRouter>
      <ThemeProvider withToastContainer>
        <MyApp />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
