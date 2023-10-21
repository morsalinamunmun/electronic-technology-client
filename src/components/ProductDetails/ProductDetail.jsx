
const ProductDetail = ({productDetail}) => {
    const {details, product, price, image_url} = productDetail;
    return (
        <div>
            <img src={image_url} alt="" />
            <p>{details}</p>
        </div>
    );
};

export default ProductDetail;