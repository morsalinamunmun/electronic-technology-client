// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

import { useLoaderData, useParams } from "react-router-dom";

const BrandProducts = () => {
    const products = useLoaderData()
    const {brand_name} = useParams();
    return (
        <div>
                
        </div>
    );
};

export default BrandProducts;