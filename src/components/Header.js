import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

function Header() {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>web and mobile development</h1> 
                <Typed 
                className="typed-text"
                strings={["React Native", "Flutter", "Python", "NodeJS", "HTML, CSS, JavaScript", "React JS", "Responsive Design"]} 
                typeSpeed={50}
                backSpeed={60}
                loop
                />
                    <Link 
                      activeClass="active"
                      smooth={true} 
                      spy={true}
                      offset={-685}
                      duration={200}
                      className="btn-main-offer" 
                      to="contact">Contact Me</Link>
                {/* <a href="/contact" className="btn-main-offer">Contact Me</a> */}
            </div>          
        </div>
    )
}

export default Header
