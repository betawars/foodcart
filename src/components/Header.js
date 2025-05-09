
const logoImage = new URL('../../assets/logo-main-wtext.png', import.meta.url).href;
const Header = () => {
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

                </ul>
            </div>
        </div>
    )
}

export default Header;