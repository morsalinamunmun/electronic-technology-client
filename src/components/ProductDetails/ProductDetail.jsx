
const ProductDetail = ({productDetail}) => {
    const {description, product, price, image_url} = productDetail;
    return (
            <div className="flex mx-auto">
                <div className="max-w-4xl mx-auto">
            <img className="w-96" src={image_url} alt="" />
                <div className="flex gap-20 py-5">
                    <h2 className="text-2xl font-bold text-blue-800">{product}</h2>
                    <p className=""><span>Price: </span>{price}</p>
                </div>
            <p>{description}</p>
            <button className="my-5 text-white bg-red-500 px-3 py-2">Add to Cart</button>
        </div>
            </div>
    );
};

export default ProductDetail;