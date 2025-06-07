const User = (props) => {
    const {name,bio} = props.data;
    return(
        <div className="p-4 m-4 bg-amber-100 w-72 h-72 flex flex-col justify-around rounded-2xl shadow-2xl">
            <h2>Name: {name}</h2>
            <h2>Position: {bio}</h2>
        </div>
    )
}

export default User