import { lazy, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const logoImage = new URL("../../assets/logo-main-wtext.png", import.meta.url)
    .href;

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const status = useIsOnline();
    const {cartValue,loggedInUser} = useContext(UserContext)
    useEffect(()=>{
        setBtnName(loggedInUser)
    },[loggedInUser])

    //used to access the values in the cart array
    const cartItems = useSelector((store) => store.cart.item)
    console.log(cartItems)
    return (
        <div className="z-10 flex justify-between bg-amber-200 shadow-lg rounded-b-2xl p-3 sticky top-0">
            <div className="">
                <Link to={"/"} className="flex justify-center items-center gap-2">
                    <span><img className="w-15" src={logoImage} alt="logo" /></span>
                    <span><h1 className="text-4xl font-bold text-amber-700 font-serif">FoodCart</h1></span>
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex jus p-5 m-1">
                    <li className="px-4">Status: {status ? "🟢" : "🔴"} </li>
                    <li className="px-4">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/grocery"}>Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/cart"}>Cart{cartValue>0?
                    <span className="px-1 mx-1 bg-red-500 rounded-md text-white text-center">{cartItems.length}</span>:""}</Link></li>                    
                    <button
                        onClick={() => setBtnName("Logout")}
                       
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
