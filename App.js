import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./public/logo.jpg"
import "./index.css"

const RestaurantCard = () => {
    return(
        <div className="res-card">
            <img
                className="res-card-img"
                src={"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661388035/oe0tx8kio7xxijc8xhtq.jpg"}
            />
            <h3>Restaurant Name</h3>
            <h4>Cuisines</h4>
            <h4>Rating</h4>
            <h4>ETA</h4>
        </div>
    )
}

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"
                    src="/public/logo-main-wtext.png"
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

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const Footer = () => {
    return(
        <div>

        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
