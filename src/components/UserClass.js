import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
        }
    }
    //This is the class alternative for useEffect and the purpose is also the same, to make API calls
    componentDidMount(){
        console.log("Will be called when the whole component is loaded, including the components called in side the render()")
    }

    render() {
        const {name} = this.props;
        const {count} = this.state;
        return (
            <div className="user-card">
                <h3>Counter: {count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count:count+1
                    })
                }}>Increase</button>
                <h2>Name {name}</h2>
                <h2>Address</h2>
            </div>
        );
    }
}

export default UserClass;
