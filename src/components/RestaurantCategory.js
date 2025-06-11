import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    const { title, categories } = props.data;
    const [visibility, setVisibility] = useState(false);
    console.log(visibility)
    return (
        <div>
            <div className="w-1/2 bg-amber-50 my-4 p-4 mx-auto shadow-xl flex justify-between" onClick={()=>setVisibility(!visibility)}>
                <span>
                    {title}({categories.length})
                </span>
                <span>v</span>
            </div>
            <div className={visibility ? "visible" : "invisible"} >
                {categories.map((item) => {
                    return (
                        <div
                            key={item.categoryId}
                            
                        >
                            <ItemList data={item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RestaurantCategory;
