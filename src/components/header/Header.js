import React from 'react';
import '../../styles/Header.scss';
import Catalog from './Catalog'

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import ButtonTopic from './Button'

export default function Header() {
  return (
      <header>
        <ButtonTopic/>
        <div  className='header_title'>
            <Link to="/">po_VAR.by</Link>
        </div>
        <nav className='header_navigation'>
          <ul className='header_navigation-content'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">
                <Catalog/>
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}
