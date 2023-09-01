
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="nav-heading">Geeks <span>Invention</span></h1>
                <ul className="nav-links">
                    <li><a href="/" className=' underline'>HOME</a></li>
                    <li><a href="/work">WORK</a></li>
                    <li><a href="/technology">TECHNOLOGY</a></li>
                    <li><a href="/services">SERVICES</a></li>
                    <li><a href="/company">COMPANY</a></li>
                    <li><a href="/contacts">CONTACTS</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
