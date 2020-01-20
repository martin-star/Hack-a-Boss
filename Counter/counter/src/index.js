import React from 'react';
import ReactDOM from 'react-dom';
import { Header} from "./components/Header";
import { Counter} from "./components/Counter";
import "./styles.css";


function App() {
    return (
      <main>
        <Header />
        <Counter />
      </main>
    );
  }


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
