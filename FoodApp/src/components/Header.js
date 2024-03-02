import { LOGO_URL } from "../utils/constants";
import { useState } from "react"; 
import { Link } from "react-router-dom";

const Header = () => {

    const [btnNameReact, setBtnNamereact] = useState("Login")

    let clickHandler = () => {
        btnNameReact === "Login"
            ? setBtnNamereact("Logout")
            : setBtnNamereact("Login")
    }

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' 
                src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                    <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={clickHandler}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;