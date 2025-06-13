import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const RestaurantCategory = (props) => {
    const [visible, setVisible] = useState({});
    useEffect(() => {
        const initialVisibility = {};
        for (let index = 0; index < props.data.length; index++) {
            const categoryId = props.data[index].categoryId;
            initialVisibility[categoryId] = false;
        }
        setVisible(initialVisibility);
    }, []);

    console.log(visible);

    const handleClick = (categoryId) => {
        setVisible((previous) => ({
            ...previous,
            [categoryId]: !previous[categoryId],
        }));
    };

    return (
        <div>
            {props.data.map((category) => {
                return (
                    <div
                        
                        key={category.categoryId}
                        className={`bg-amber-50 my-4 p-4 mx-auto shadow-xl rounded-lg`}
                    >
                        <div onClick={() => handleClick(category.categoryId)} className={`z-1 bg-amber-50 flex justify-between cursor-pointer ${visible[category.categoryId]?'sticky py-4 top-24':''}`}>
                            <span className="font-bold text-lg">
                                {category.title}({category.itemCards.length})
                            </span>
                            {visible[category.categoryId]?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}
                        </div>

                        <div  className={`bg-white overflow-hidden transition-all duration-300 ease-in-out ${
                                visible[category.categoryId] ? "max-h-fit" : "max-h-0"
                            }`}>
                            {visible[category.categoryId] && (
                                <ItemList data={category.itemCards} />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RestaurantCategory;
