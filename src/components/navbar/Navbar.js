
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="navtop">
                <div className="navtop__logo">Logo</div>
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