
import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setBrands(data))
    }, [])

   /*  const handleBrand = () =>{
        console.log()
        fetch(`https://electronics-technology-server.vercel.app/products/${name}`)
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
        })

    } */
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-blue-950 my-5">Electronics Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-2xl lg:max-w-4xl mx-auto mt-8">
                {
                    brands.map(brand=> <Brand key={brand.id} brand={brand}></Brand>)
                }
         </div>
        </div> 
    );
};

export default Brands;
