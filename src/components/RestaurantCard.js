const RestaurantCard = (props) => {
    const {data} = props
    return(
        <div className="res-card">
            <img
                className="res-card-img"
                src={data.info.image.url}
            />
            <h3>{data.info.name}</h3>
            <h4>{data.info.cuisine.map((e)=>e.name).join(", ")}</h4>
            <h4>{data.info.rating.aggregate_rating}</h4>
            <h4>{data.distance}</h4>
        </div>
    )
}

export default RestaurantCard; 