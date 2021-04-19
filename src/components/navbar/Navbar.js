import { useState } from 'react';
import logo from '../../assets/logo.png'
import './Navbar.css';

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
                <div className="navtop__menu">
                    <button className="navtop__btn">Sign Up</button>
                    <button className="navtop__btn">Sign In</button>
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
