import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link, Route } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";

const Body = (props) => {
  const [mainList, setMainList] = useState([]);
  const [activeList, setActiveList] = useState([]);
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json)
    setMainList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setActiveList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onFilterClick = () => {
    setActiveList(mainList.filter((e) => e.info.avgRating >= 4.5));
  };

  const onClearFilter = () => {
    setActiveList(mainList);
  };

  const onSearchClick = () => {
    setActiveList(mainList.filter((e) => e.info.name.toLowerCase().includes(searchText)))
  }

  const cardOnClick = () => {
    
  }

  const onlineStatus = useIsOnline()

  if(!onlineStatus){
    return <h1>Looks like you are offline</h1>
  }
  //conditional rendering
  return !activeList ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="top-bar-container">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
          <button onClick={onSearchClick}>Search</button>
        </div>
        <div className="filter">
          <button onClick={onFilterClick} className="filter-btn">
            Top Rated Restaurants
          </button>
          <button onClick={onClearFilter} className="filter-btn">
            Clear Filter
          </button>
        </div>
      </div>

      <div className="res-container">
        {activeList.map((data) => (
          <div key={data.info.id} onClick={cardOnClick}>
            <Link className="res-container-link" to={"/restaurant/"+data.info.id}><RestaurantCard data={data} /></Link>
          </div>
        ))}
      </div>
      {/* <RestaurantCard data={mainList}/> */}
    </div>
  );
};

export default Body;
