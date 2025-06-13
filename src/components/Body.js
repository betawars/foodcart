import { useEffect, useState } from "react";
import RestaurantCard, { promotedRestaurant } from "./RestaurantCard";
import Shimmer from "./shimmerUis/Shimmer";
import { Link, Route } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";

const Body = (props) => {
    const [mainList, setMainList] = useState([]);
    const [activeList, setActiveList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const PromotedRestaurantCard = promotedRestaurant(RestaurantCard);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setMainList(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setActiveList(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    const onFilterClick = () => {
        setActiveList(mainList.filter((e) => e.info.avgRating >= 4.5));
    };

    const onClearFilter = () => {
        setActiveList(mainList);
    };

    const onSearchClick = () => {
        setActiveList(
            mainList.filter((e) =>
                e.info.name.toLowerCase().includes(searchText)
            )
        );
    };

    const cardOnClick = () => {};

    const onlineStatus = useIsOnline();

    if (!onlineStatus) {
        return <h1>Looks like you are offline</h1>;
    }

    //conditional rendering
    return activeList?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="top-bar-container flex">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        className="search-box border-2 rounded-xl"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    ></input>
                    <button
                        className="px-4 py-1.5 bg-amber-100 rounded-xl mx-4 cursor-pointer"
                        onClick={onSearchClick}
                    >
                        Search
                    </button>
                </div>
                <div className="filter flex justify-center m-4 p-4 ">
                    <button
                        className="px-2 mx-2 bg-amber-600 rounded-xl cursor-pointer"
                        onClick={onFilterClick}
                    >
                        Top Rated Restaurants
                    </button>
                    <button
                        className="px-2 mx-2 bg-amber-600 rounded-xl cursor-pointer"
                        onClick={onClearFilter}
                    >
                        Clear
                    </button>
                </div>
            </div>


            <div className="justify-center flex flex-wrap gap-0">
                {activeList.map((data) => (
                    <div className="hover:scale-105" key={data.info.id} onClick={cardOnClick}>
                        <Link
                            className="res-container-link "
                            to={"/restaurant/" + data.info.id}
                        >
                            {data.info.sla.deliveryTime<=25 ? (
                                <PromotedRestaurantCard data={data} />
                            ) : (
                                <RestaurantCard data={data} />
                            )}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;
