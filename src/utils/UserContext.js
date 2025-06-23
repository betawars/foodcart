import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",
    cartValue:100,
})

export default UserContext;