import { useEffect, useState } from "react";
import User from "./User";



const Contact = () => {

    const [userData,setUserData] = useState(null);

    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = async()=>{
        const rawData = await fetch("https://api.github.com/users/betawars");
        const data = await rawData.json();
        setUserData(data)
    }
    console.log(userData)
    return(
        userData?
        <div>
            <User data={userData} name={"user1"}/>
        </div>:""
    );
};

export default Contact;