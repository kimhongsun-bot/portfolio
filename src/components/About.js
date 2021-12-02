import React from 'react'
import Profile from '../developers_profile.jpg';

function About() {
    return (
        <div className="main-about">
            <div className="profile">
                <div className="img-wraper">
                    <img src={Profile} alt="developer's profile picture" />
                </div>
                <h4>Sun Kimhong</h4>
                <h5>Software Engineering Student</h5>
            </div>
            <div className="personal-info">
                <h2 className="title">About Me</h2>
                <br />
                <p>
                    My name is Sun Kimhong, Cambodian, 22 years old. 
                    I am currently a third year Software Engineering student in one of the universities in Cambodia. 
                    I enjoy playing music, exploring new technology and traveling.
                </p>
                <p>
                    I previously worked on Chatbot development project as a school internship. 
                    I worked as a team on that project. 
                    I maintained the server and I also took part in the development such as creating responses and intents etc,.
                    I have intermediate skills with web development. 
                    I used to take a course and I also work on some personal projects. 
                    I know how to build a complete website with responsive design using HTML, CSS and JavaScript and React JS.
                </p>
                <h4>My Skills</h4>
                <br />
                <p>
                    + React Native
                </p>
                <p>
                    + Flutter
                </p>
                <p>
                    + Python
                </p>
                <p>
                    + NodeJS
                </p>
                <p>
                    + HTML, CSS and JavaScript
                </p>
                <p>
                    + React JS
                </p>
                <p>
                    + Responsive Design
                </p>
            </div>         
        </div>
    )
}

export default About
