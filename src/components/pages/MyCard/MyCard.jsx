import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import Navbar from "../../Shared/Navbar/Navbar";
import { useState } from "react";

const MyCard = () => {
    const loadedCarts = useLoaderData();
    const [carts, setCarts] = useState(loadedCarts);
    console.log(carts)
    return (
            <div className="">
                <Navbar></Navbar>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto my-10">
                {
                    carts.map(cart=> <Cart key={cart._id} cart={cart} carts={carts} setCarts={setCarts}></Cart>)
                }
        </div>
            </div>
    );
};

export default MyCard;