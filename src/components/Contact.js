import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Result =() => {
    return (
        <>
        <p>
            Your message has been sent successfully! I will get back to you soon.
        </p>
        <p>
            Thank you for contacting!
        </p>
        </>
    )
}

function Contact(props) {
    const [result, showResult] = useState(false);
    const sendEmail=(e) => {
        e.preventDefault();

        emailjs.sendForm('service_do01pyf', 'template_oi2vzj5', e.target, 'user_GqIseaA32Ud9C8F0GZtA8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text  )
        });
        e.target.reset();
        showResult(true);

    }

    return (
        <div className="contact-wrap">
            <h2>Contact Me</h2>
            <form className="form" action="" onSubmit={sendEmail}>
                <div className="formWord">
                    <span>Full Name</span>
                    <br />
                    <input
                        className="input100" 
                        type="text"
                        name="fullName"
                        required 
                        autoComplete="none"
                    />
                    <br />
                    <br/>
                    <span>Phone Number</span>
                    <br />
                    <input
                        className="input100" 
                        type="text"
                        name="phone"
                        required 
                        autoComplete="none"
                    />
                    <br />
                    <br/>
                    <span>Email</span>
                    <br />
                    <input
                        className="input100" 
                        type="text"
                        name="email"
                        required 
                        autoComplete="none"
                    />
                    <br />
                    <br/>
                </div>
                <div className="formWord">
                    <span>Message</span>
                    <br />
                    <textarea name="message" required></textarea>
                    <br />
                    <button>Submit</button>

                    <div className="row">{result ? <Result/> :null}</div>
                </div>
            </form>
            <div className="social-wraper">

            </div>
        </div>
    )
}

export default Contact;
