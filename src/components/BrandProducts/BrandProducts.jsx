// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

import { Link, useLoaderData, useParams } from "react-router-dom";

const BrandProducts = () => {
    const products = useLoaderData()
    console.log(products)
    const {name} = useParams();
    console.log(name)
    const product = products.filter(product=> product.name === (name));
    console.log(product)
    return (
        <div>
           {/*  {
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
                        <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                </div>
                )
            } */}
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-10">
                {
                    product.map(pro=> 
                        <div key={pro._id}>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="w-56 h-56"><img className="w-full h-full" src={pro.image_url} alt="product" /></figure>
                                <div className="card-body">
                                    <h2 className="text-xl font-bold text-blue-800">{pro.name}</h2>
                                    <h2 className="card-title">{pro.product}
                                    <div className="badge badge-secondary">{pro.rating}</div></h2>
                                    <p>{pro.description}</p>
                                    <div className="card-actions items-center justify-end">
                                        <div className="badge badge-outline">Price: {pro.price}</div> 
                                        <Link><button className="text-blue-800 font-bold underline">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BrandProducts;