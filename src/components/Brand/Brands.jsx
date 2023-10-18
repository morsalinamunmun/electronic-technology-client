import { useEffect, useState } from "react";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setBrands(data))
    }, [])
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-blue-950 my-5">Electronics Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-2xl lg:max-w-4xl mx-auto mt-8">
                {
                    brands.map(brand=>
                        <div className="bg-gray-200  rounded pt-5 pb-10" key={brand.id}>
                            <div className="w-64 flex mx-auto h-56">
                                <img className="w-full h-full" src={brand.brand_img} alt="" />
                            </div>
                            <p className="text-center pt-5">{brand.brand_name}</p>
                        </div>
                    )
                }
         </div>
        </div> 
    );
};

export default Brands;