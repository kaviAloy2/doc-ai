// import React from 'react'
import '../../../Styles/doctor/07_Contact/Contact.css'

const Contact = () => {
    return (
        <section className="contact">
            <div className="content">
                <h2>Contact Us</h2>
            </div>
            <div className="containercon">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon">
                            <i className="fa fa-map-marker" aria-hidden="false" />
                        </div>
                        <div className="text contact-details" >
                            <p>Address</p>
                            <p>abcd...</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <i className="fa-solid fa-phone" aria-hidden="true" />
                        </div>
                        <div className="text contact-details" >
                            <p>Phone No</p>
                            <p>507-475-6094</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <i className="fa fa-envelope" aria-hidden="true" />
                        </div>
                        <div className="text contact-details" >
                            <p>Email</p>
                            <p>chethanayak0007@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="contactForm">
                    <form />
                    <h2>Send Message</h2>
                    <div className="inputbox">
                        <input type="text" name required="required" className='inputbox-field' />
                        <span >Full Name</span>
                    </div>
                    <div className="inputbox">
                        <input type="text" name required="required"
                            className='inputbox-field'
                        />
                        <span >Email</span>
                    </div>
                    <div className="inputbox">
                        <textarea required="required" className='inputbox-field'
                            rows={4} />
                        <span >Type your Message...</span>
                    </div>

                    <div className="inputbox">
                        <button>
                            Submit
                        </button>
                    </div>
                </div>
            </div><table>
            </table>
        </section>
    )
}

export default Contact