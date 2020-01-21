import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";
import "../node_modules/bootswatch/dist/sketchy/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
