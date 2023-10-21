import { useLoaderData, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Navbar from "../Shared/Navbar/Navbar";

const ProductDetails = () => {
    const products = useLoaderData();
    console.log(products);
    const {id} = useParams()
    console.log(id)
    const product = products.filter(product=> product._id === (id));
    console.log(product)
    return (
        <div>
            <Navbar></Navbar>
            {
                product.map(productDetail=> <ProductDetail key={productDetail.id} productDetail={productDetail}></ProductDetail>)
            }
        </div>
    );
};

export default ProductDetails;