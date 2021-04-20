import { useState } from 'react';
import logo from '../../assets/logo.png'
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    // Click handlers for mobile navbars
    const [topNavClick, setTopNavClick] = useState(false);
    const handleTopNavClick = () => setTopNavClick(!topNavClick);
    const closeTopMenu = () => setTopNavClick(false);

    const [bottomNavClick, setBottomNavClick] = useState(false);
    const handleBottomNavClick = () => setBottomNavClick(!bottomNavClick);
    const closeBottomMenu = () => setBottomNavClick(false);

    return (
        <nav>
            <div className="navtop">
                <img className="navtop__logo" src={logo} alt="Website-logo"/>
                <div className={topNavClick ? "navtop__menu active" : "navtop__menu"}>
                    <button className="navtop__btn" onClick={closeTopMenu}>Sign Up</button>
                    <button className="navtop__btn" onClick={closeTopMenu}>Sign In</button>
                </div>
                <div className="navtop__mobile-menu" onClick={handleTopNavClick}>
                    {
                        topNavClick ? (<FaTimes className="icon"/>) : 
                                        (<FaBars className="icon"/>)
                    }
                </div>
            </div>
            <div className="navbottom">
                <div className="navbottom__link">about adoptions</div>
                <div className="navbottom__link">dog breeds</div>
                <div className="navbottom__link">cat breeds</div>
                <div className="navbottom__link">pet care</div>
                <div className="navbottom__link">shelters near me</div>
            </div>
        </nav>
    )
}

export default Navbar
