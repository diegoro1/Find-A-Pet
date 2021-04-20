import { useState } from 'react';
import logo from '../../assets/logo.png'
import './Navbar.css';
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from 'react-icons/fa'

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
            <div className={bottomNavClick ? "navbottom active" : "navbottom"}>
                <div className="navbottom__link" onClick={closeBottomMenu}>about adoptions</div>
                <div className="navbottom__link" onClick={closeBottomMenu}>dog breeds</div>
                <div className="navbottom__link" onClick={closeBottomMenu}>cat breeds</div>
                <div className="navbottom__link" onClick={closeBottomMenu}>pet care</div>
                <div className="navbottom__link" onClick={closeBottomMenu}>shelters near me</div>
                <div className="navbottom__link-drop" onClick={handleBottomNavClick}>
                    {
                        bottomNavClick ? (<FaAngleUp className="icon"/>) : 
                                        (<FaAngleDown className="icon"/>)
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
