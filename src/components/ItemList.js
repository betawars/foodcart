import { IMG_URL } from "../utils/constants";

const ItemList = (props) => {
    console.log(props);
    return (
        <div>
            {props.data.map((item) => {
                return (
                    <div
                        key={item.card.info.id}
                        className="p-2 m-2 border-amber-400 border-b-1 flex justify-between align-middle"
                    >
                        <div className="w-9/12">
                            <div className="py-2">
                                <p>{item.card.info.name}</p>
                                <p>
                                    ₹ 
                                    {item.card.info.defaultPrice
                                        ? item.card.info.defaultPrice / 100
                                        : item.card.info.price / 100}
                                </p>
                            </div>
                            <p className="text-sm">
                                {item.card.info.description}
                            </p>
                        </div>

                        <div className="w-3/12 flex justify-end relative">
                            <img
                                alt={item.card.info.name}
                                className="w-auto h-auto rounded-lg"
                                src={IMG_URL + item.card.info.imageId}
                            />
                            <button className="absolute p-1 w-fit bg-green-100 text-green-500 rounded-sm bottom-2 right-2">Add+</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
