import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData:{
                name:"",
                bio:""
            }
        }
    }
    //This is the class alternative for useEffect and the purpose is also the same, to make API calls
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/betawars")
        const json = await data.json()

        this.setState({
            userData:json
        });
    }

    render() {
        
        const {name,bio} = this.state.userData;
        return (
            <div className="user-card">                
                <h2>Name: {name}</h2>
                <h2>Bio: {bio} </h2>
            </div>
        );
    }
}

export default UserClass;
