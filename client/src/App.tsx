import React from "react";
import "./App.css";
import "./App.sass";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { MyRewards } from "./pages/MyRewards";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MyRewards} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;