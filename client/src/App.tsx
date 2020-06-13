import React from "react";
import "./App.css";
import "./App.sass";
import { Navbar } from "./components/Navbar";
import { LoginSignup } from "./pages/LoginSignup";
import { About } from "./pages/About";
import { MyRewards } from "./pages/MyRewards";
import { Search } from "./pages/Search";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MyRewards} />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
        <Route path="/loginSignup" component={LoginSignup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
