import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {data} = props
    return(
        <div className="res-card">
            <img
                className="res-card-img"
                src={IMG_URL+data.info.cloudinaryImageId}
            />
            <h3>{data.info.name}</h3>
            <h4>{data.info.cuisines.map((e)=>e).join(", ")}</h4>
            <h4>{data.info.avgRating}</h4>
            <h4>{data.info.costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard; 