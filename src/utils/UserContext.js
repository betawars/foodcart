import { createContext, useContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",
    cartValue:0,
})

export default UserContext;