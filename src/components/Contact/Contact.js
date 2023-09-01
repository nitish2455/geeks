import './Contact.css';

const Contact = () => {
    return (
        <section className='contact'>
            <div className='contact-container'>
                <h1 className='text-6xl font-bold py-2'>Get to know us better</h1>
                <p  className='text-lg text-gray-400 py-6'>It is a pleasure to have you on our website. Let us know if there's an opportunity to do something together.
                </p>
                <button className='desc-link info-btn'>
                    <h3>Drop us a message</h3>
                </button>
            </div>
            <footer className='footer'>
                <div className='address'>
                    <h1 className="nav-heading">Geeks <span>Invention</span></h1>
                    <p>447 Broadway, 2nd Floor Suite #772, New York 10013, United States +1-347-535-0004</p>
                </div>
                <ul className="nav-links">
                    <li><a href="/work">Work</a></li>
                    <li><a href="/technology">Technology</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/company">Company</a></li>
                    <li><a href="/contacts">Contact</a></li>
                    <li><a href="/">Terms & Conditions</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                </ul>
                <div><button className='desc-link'>
                    <h3>Stay tuned for our updates</h3>
                </button></div>
            </footer>
            <div className='end'>© Copyright 2023 . All Rights Reserved</div>
        </section>
    )
}

export default Contact;