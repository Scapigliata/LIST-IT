import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChess } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <header>
    <span className="logo">
    <FontAwesomeIcon icon={faChess} />
    </span>
    <div className="main-nav">
    <li><NavLink exact to="/" activeStyle={{ color: 'red' }}>Home</NavLink></li>
    <li><NavLink exact to="/about" activeClassName="activeClassName" >About</NavLink></li>
    <li><NavLink exact to="/contact">Contact</NavLink></li>
    </div>
  </header>
);

export default Header;
