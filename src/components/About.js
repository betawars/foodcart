import { Outlet } from "react-router-dom";

const About = () => {
    return(
        <div>
            <h1>About header</h1>
            <Outlet/>
            <h1>About Footer</h1>
        </div>
    )
}

export default About;