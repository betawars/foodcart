import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartReducerSlice";

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.cart.item);
    // const onHandleAddItem = (item) =>{
    //     dispatch(addItem(item))
    // }
    console.log(cart);
    return (
        <div className="p-4 m-4 rounded-2xl text-center h-100">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="flex">
                <div className="bg-amber-100 text-left rounded-2xl h-100 w-2/3">
                    {cart.map((item) => {
                        return (
                            <div className="m-2 p-2" key={item.id}>
                                <div className="flex justify-between">
                                    {/* <div>{item.name}&nbsp;<button onClick={()=>onHandleAddItem(item)} className=" p-1 w-fit bg-green-100 text-green-500 rounded-sm bottom-2 right-2 cursor-pointer">Add+</button></div> */}
                                    <p>₹{(item.defaultPrice || item.price) / 100}</p>
                                    
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="text-right w-1/3">
                    <p>Item details</p>
                    <p>
                        Total:
                        ₹{cart
                            .map((item) => item.price)
                            .reduce((sum, i) => sum + i, 0) / 100}
                    </p>
                    <button className="bg-red-500 text-white p-1 rounded-lg" >Order now!</button>
                </div>
            </div>
        </div>
    );
}
