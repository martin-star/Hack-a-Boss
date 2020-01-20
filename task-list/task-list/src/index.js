import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import { BrowserRouter, Route,Switch} from 'react-router-dom';
import '../node_modules/bootswatch/dist/sketchy/bootstrap.css';


function App(){
    return(
    <BrowserRouter>
            <Header />
            </BrowserRouter>
    );
}

export {App};


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

