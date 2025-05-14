import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = (props) => {
  const { resList } = props;

  const [mainList, setMainList] = useState([]);
//   const [activeList, setActiveList] = useState([
//     {
//       "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//       info: {
//         id: "14548",
//         name: "Burger King",
//         cloudinaryImageId:
//           "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/1411f1d3-1947-4d7c-a8cc-d8ab52d0fe79_14548.jpg",
//         locality: "Paud Road",
//         areaName: "Kothrud",
//         costForTwo: "₹350 for two",
//         cuisines: ["Burgers", "American"],
//         avgRating: 4.2,
//         parentId: "166",
//         avgRatingString: "4.2",
//         totalRatingsString: "71K+",
//         sla: {
//           deliveryTime: 33,
//           lastMileTravel: 5.8,
//           serviceability: "SERVICEABLE",
//           slaString: "30-35 mins",
//           lastMileTravelString: "5.8 km",
//           iconType: "ICON_TYPE_EMPTY",
//         },
//         availability: {
//           nextCloseTime: "2025-05-15 06:00:00",
//           opened: true,
//         },
//         badges: {
//           imageBadges: [
//             {
//               imageId: "Rxawards/_CATEGORY-Burger.png",
//               description: "Delivery!",
//             },
//           ],
//         },
//         isOpen: true,
//         type: "F",
//         badgesV2: {
//           entityBadges: {
//             imageBased: {
//               badgeObject: [
//                 {
//                   attributes: {
//                     description: "Delivery!",
//                     imageId: "Rxawards/_CATEGORY-Burger.png",
//                   },
//                 },
//               ],
//             },
//             textBased: {},
//             textExtendedBadges: {},
//           },
//         },
//         aggregatedDiscountInfoV3: {
//           header: "ITEMS",
//           subHeader: "AT ₹139",
//         },
//         orderabilityCommunication: {
//           title: {},
//           subTitle: {},
//           message: {},
//           customIcon: {},
//         },
//         differentiatedUi: {
//           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           differentiatedUiMediaDetails: {
//             mediaType: "ADS_MEDIA_ENUM_IMAGE",
//             lottie: {},
//             video: {},
//           },
//         },
//         reviewsSummary: {},
//         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         restaurantOfferPresentationInfo: {},
//         externalRatings: {
//           aggregatedRating: {
//             rating: "--",
//           },
//         },
//         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//       },
//       analytics: {
//         context: "seo-data-d28ba13c-866e-4b84-a8e4-aa92c1a2c928",
//       },
//       cta: {
//         link: "https://www.swiggy.com/city/pune/burger-king-paud-road-kothrud-rest14548",
//         text: "RESTAURANT_MENU",
//         type: "WEBLINK",
//       },
//       widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//     },
//   ])
  const [activeList, setActiveList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setMainList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setActiveList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onFilterClick = () => {
    setActiveList(mainList.filter((e) => e.info.avgRating >= 4.5));
  };

  const onClearFilter = () => {
    setActiveList(mainList);
  };

  if(activeList.length===0){
    return <Shimmer/>
  }

  return (
    <div className="body">
      <div className="filter">
        <button onClick={onFilterClick} className="filter-btn">
          Top Rated Restaurants
        </button>
        <button onClick={onClearFilter} className="filter-btn">
          Clear Filter
        </button>
      </div>
      <div className="res-container">
        {activeList.map((data) => (
          <div key={data.info.id}>
            <RestaurantCard data={data} />
          </div>
        ))}
      </div>
      {/* <RestaurantCard data={mainList}/> */}
    </div>
  );
};

export default Body;
