import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChess } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <header>
    <span className="logo">
    <FontAwesomeIcon className="chess" icon={faChess} />
    </span>
    <div className="main-nav">
    <li><NavLink exact to="/" activeStyle={{ color: 'red', padding: '9px 50px', background: 'RGB(232, 236, 239)' }}>Home</NavLink></li>
    <li><NavLink exact to="/about" activeClassName="activeClassName" activeStyle={{ color: 'red', padding: '9px 50px', background: 'RGB(232, 236, 239)' }}>About</NavLink></li>
    <li><NavLink exact to="/contact" activeStyle={{ color: 'red', padding: '9px 50px', background: 'RGB(232, 236, 239)' }}>Contact</NavLink></li>
    </div>
  </header>
);

export default Header;
