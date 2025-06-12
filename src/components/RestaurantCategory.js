import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    return (
        <div>
            {props.data.map((category) => {
                return (
                    <div key={category.categoryId} className=" bg-amber-50 my-4 p-4 mx-auto shadow-xl rounded-lg">
                        <div
                            className="flex justify-between"
                        >
                            <span className="font-bold text-lg">
                                {category.title}({category.itemCards.length})
                            </span>
                            <span>v</span>
                        </div>
                        <ItemList data={category.itemCards} />
                    </div>
                );
            })}

            {/* <ItemList data={categories} /> */}
        </div>
    );
};

export default RestaurantCategory;
