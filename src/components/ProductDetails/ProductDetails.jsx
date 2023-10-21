import { useLoaderData, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductDetails = () => {
    const products = useLoaderData();
    console.log(products);
    const {id} = useParams()
    console.log(id)
    const product = products.find(pro=> pro.id === (id));
    return (
        <div>
            {
                product.map(productDetail=> <ProductDetail key={productDetail.id} productDetail={productDetail}></ProductDetail>)
            }
        </div>
    );
};

export default ProductDetails;