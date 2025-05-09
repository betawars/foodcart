import RestaurantCard from "./RestaurantCard";

const Body = (props) => {

    const{resList} = props
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((data)=><div key={data.info.resId}><RestaurantCard data = {data}/></div>)}
            </div>
        </div>
    )
}

export default Body;