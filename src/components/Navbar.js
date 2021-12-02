import React from 'react';
import logo from '../logo.png';
// import { Navbar } from 'react-bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Link, animateScroll as scroll } from "react-scroll";
// REACT FONT AWESOME IMPORT 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() { 
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-dark" sticky="top">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} onClick={scroll.scrollToTop}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link 
                      activeClass="active"
                      smooth={true} 
                      spy={true}
                      offset={-100}
                      duration={200}
                      className="nav-link text-white" 
                      to="home">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link 
                      activeClass="active"
                      smooth={true}
                      spy={true}
                      offset={-100}
                      duration={200} 
                      className="nav-link text-white" 
                      to="about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link 
                      activeClass="active"
                      smooth={true} 
                      spy={true}
                      offset={-100}
                      duration={200}
                      className="nav-link text-white" 
                      to="services">Services</Link>
                    </li>
                    <li className="nav-item">
                      <Link 
                      activeClass="active"
                      smooth={true} 
                      spy={true}
                      offset={-675}
                      duration={200}
                      className="nav-link text-white" 
                      to="contact">Contact</Link>
                    </li>
                  </ul>
                </div>
          </div>
        </nav>
    );
}
