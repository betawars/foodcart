import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMG_URL, MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
   const resId = useParams();

  const resInfo = useRestaurantMenu(resId.resId)

  console.log(resInfo)
  if (!resInfo) return <Shimmer />;

  const { name, costForTwoMessage, cuisines,cloudinaryImageId } = resInfo
    ? resInfo?.cards[2]?.card?.card?.info
    : "";
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


  return resInfo ? (
      <div className="flex">
          <div className="m-4 p-2 flex flex-col w-1/2 h-fit bg-amber-100 rounded-2xl gap-3">
              <h1 className="text-3xl">{name}</h1>
              <h3>{costForTwoMessage}</h3>
              <h3>{cuisines.join(",")}</h3>
              <h3>Menu</h3>
              <ul>
                  {itemCards?.map((e) => {
                      return (
                          <li className="text-2xl" key={e.card.info.id}>
                              {e.card.info.name} -₹
                              {e.card.info.price / 100 ||
                                  e.card.info.defaultPrice / 100}{" "}
                          </li>
                      );
                  })}
              </ul>
          </div>
          <div className="m-4 p-2 bg-amber-50 w-1/2 rounded-2xl">
              <img
                  src={IMG_URL + cloudinaryImageId}
              />
          </div>
      </div>
  ) : (
      <Shimmer />
  );
};

export default RestaurantMenu;
