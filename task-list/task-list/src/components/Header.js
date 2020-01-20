import React, {useState} from 'react';
import {Link} from 'react-router-dom';





export default function Header() {
    const [open, setOpen]=useState(false)
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
             <button
        className="navbar-toggler"
        type="button"
        onClick={e => setOpen(!open)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link to="/" className="navbar-brand">Awesome Todos</Link>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
        </div>
        </nav>
    );
    
}


