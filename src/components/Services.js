import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Services() {
    return (
        <div className="services">
            <h1>My Services</h1>
            <div className="card-wraper">
                <div className="web-design">
                    <div className="icon-wrap">
                        <FontAwesomeIcon className="icon" icon={faLaptopCode} />
                    </div>
                    <h3>Web Design</h3>
                    <p>
                        I work on each project individually with responsive design and I always focus on the results.
                    </p>
                </div>
                <div className="web-dev">
                    <div className="icon-wrap">
                        <FontAwesomeIcon className="icon" icon={faCode} />
                    </div>
                    <h3>Web Development</h3>
                    <p>
                        Your website will be built with high security and the newest technologies.
                    </p>
                </div>
                <div className="chatbot-dev">
                    <div className="icon-wrap">
                        <FontAwesomeIcon className="icon" icon={faRobot} />
                    </div>
                    <h3>Chatbot Development</h3>
                    <p>
                        Handle all your business messages and store all the data for you.
                    </p>
                </div>
                <div className="mobile-dev">
                    <div className="icon-wrap">
                        <FontAwesomeIcon className="icon" icon={faMobile} />
                    </div>
                    <h3>Mobile Development</h3>
                    <p>
                        Develop your cross-platform mobile app with the newest technologies.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services
