import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = (props) => {

    const{resList} = props

    const [mainList, setMainList] = useState(resList)

    const onFilterClick = () => {
        setMainList(mainList.filter((e)=>e.info.rating.rating_text>=4.5))
    }

    const onClearFilter = () => {
        setMainList(resList)
    }

    return(
        <div className="body">
            <div className="filter">
                <button onClick={onFilterClick} className="filter-btn">Top Rated Restaurants</button>
                <button onClick={onClearFilter} className="filter-btn">Clear Filter</button>
            </div>
            <div className="res-container">
                {mainList.map((data)=><div key={data.info.resId}><RestaurantCard data = {data}/></div>)}
            </div>
        </div>
    )
}

export default Body;