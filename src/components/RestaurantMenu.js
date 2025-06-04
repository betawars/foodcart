import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
   const resId = useParams();

  const resInfo = useRestaurantMenu(resId.resId)


  if (!resInfo) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } = resInfo
    ? resInfo?.cards[2]?.card?.card?.info
    : "";
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return resInfo ? (
    <div className="menu-container">
      <h1>{name}</h1>
      <h3>{costForTwoMessage}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h3>Menu</h3>
      <ul>
        {itemCards?.map((e) => {
          return (<li key={e.card.info.id}>{e.card.info.name} -₹{e.card.info.price/100||e.card.info.defaultPrice/100} </li>);
        })}
      </ul>
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;
