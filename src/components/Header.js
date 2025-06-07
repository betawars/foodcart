import { lazy, useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import Grocery from "./Grocery";

const logoImage = new URL('../../assets/logo-main-wtext.png', import.meta.url).href;


const Header = () => {

    const [btnName, setBtnName] = useState("Login")
    const status = useIsOnline();

    return(
        <div className="flex justify-between bg-amber-200 shadow-lg m-1 rounded-2xl p-3">
            <div className="">
                <img 
                    className="w-15"
                    src={logoImage}
                    alt="logo"
                />
            </div>
            <div className="flex items-center">
                <ul className="flex jus p-5 m-1">
                    <li className="px-4">Status: {status?"🟢":"🔴"} </li>
                    <li className="px-4"><Link to={"/"}>Home</Link></li>
                    <li className="px-4"><Link to={"/about"}>About</Link></li>
                    <li className="px-4"><Link to={"/contact"}>Contact</Link></li>
                    <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button onClick={()=>setBtnName("Logout")} className="login">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;