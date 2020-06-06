import React from "react";
import "./App.css";
import "./App.sass";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { MyRewards } from "./pages/MyRewards";
import { Explore } from "./pages/Explore";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MyRewards} />
        <Route path="/about" component={About} />
        <Route path="/explore" component={Explore} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
