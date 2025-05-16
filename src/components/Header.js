import { useState } from "react";

const logoImage = new URL('../../assets/logo-main-wtext.png', import.meta.url).href;



const Header = () => {

    const [btnName, setBtnName] = useState("Login")

    return(
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"
                    src={logoImage}
                    alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button onClick={()=>setBtnName("Logout")} className="login">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;