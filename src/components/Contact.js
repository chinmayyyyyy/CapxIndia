import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className='container'>
                <div className='col-1'>
                    <h3>Welcome to CAPXINDIA!!!</h3>
                    <h3>"Where Stocks Meet Success"</h3>
                    <p>At Capxindia, we believe in simplifying the complexities of finance and making financial success accessible to all. Join us on this financial journey, and let's create a prosperous future together.</p>
                    <button className='button'>Get your free financial analysis</button>
                </div>
                <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button className='submit-button ' type="submit">Send Message</button>
            </form>
            </div>
        </div>
    )
}

export default Contact
