import React from 'react';
import logo from '../logo.png';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
// REACT FONT AWESOME IMPORT 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {      
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link text-white" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
          </div>
        </nav>
    );
}
