import { useLoaderData, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductDetails = () => {
    const products = useLoaderData();
    console.log(products);
    const {id} = useParams()
    console.log(id)
    const product = products.filter(product=> product._id === (id));
    console.log(product)
    return (
        <div>
            {
                product.map(productDetail=> <ProductDetail key={productDetail.id} productDetail={productDetail}></ProductDetail>)
            }
        </div>
    );
};

export default ProductDetails;