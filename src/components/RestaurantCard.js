import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {data} = props
    return(
        <div className="bg-amber-200 rounded-lg m-4 p-4 w-46 hover:shadow-2xl h-106 overflow-clip flex flex-col">
            <img
                className="w-1/1 h-32"
                src={IMG_URL+data.info.cloudinaryImageId}
            />
            <h3 className="font-bold py-2 text-lg">{data.info.name}</h3>
            <h4 className="py-2">{data.info.cuisines.map((e)=>e).join(", ")}</h4>
            <h4 className="py-2">⭐{data.info.avgRating}</h4>
            <h4 className="py-2">{data.info.costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard; 