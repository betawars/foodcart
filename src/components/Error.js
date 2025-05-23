import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    return(
        <div>
            No page assigned to this route
        </div>
    )
}

export default Error;