// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

import { useLoaderData, useParams } from "react-router-dom";
import BrandProduct from "./BrandProduct";
import Navbar from "../Shared/Navbar/Navbar";

const BrandProducts = () => {
    const products = useLoaderData()
    console.log(products)
    const { name} = useParams();
    console.log(name)
    const product = products.filter(product=> product.name === (name));
    console.log(product)

    return (
        <div>
            <Navbar></Navbar>
            {/* {
                product.map(pro=>
                    <div key={pro.id} className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={pro.image_url} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={pro.image_url} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={pro.image_url} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                </div>
                )
            } */}
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto my-10 gap-10">
                {
                    product.map(brandProduct=> <BrandProduct key={brandProduct.id} brandProduct={brandProduct}></BrandProduct>)
                }
            </div>
        </div>
    );
};

export default BrandProducts;