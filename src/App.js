import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { resList } from "./utils/mockData";

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body resList = {resList}/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
