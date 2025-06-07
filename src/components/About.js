import { Outlet } from "react-router-dom";

const About = () => {
    return(
        <div>
            <h1 className="text-3xl font-bold underline">About header</h1>
            <Outlet/>
            <h1>About Footer</h1>
        </div>
    )
}

export default About;