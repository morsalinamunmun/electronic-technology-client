import Swal from "sweetalert2";

const ProductDetail = ({productDetail}) => {
    const {_id, description, product, price, image_url} = productDetail;

    const handleSelectCart = () =>{
        const productInfo ={
            _id, description, product, price, image_url
        }
        console.log()
        fetch('https://electronics-technology-server.vercel.app/myCart', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Product add successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }
    return (
            <div className="flex mx-auto">
                <div className="max-w-4xl mx-auto">
            <img className="w-96" src={image_url} alt="" />
                <div className="flex gap-20 py-5">
                    <h2 className="text-2xl font-bold text-blue-800">{product}</h2>
                    <p className=""><span>Price: </span>{price}</p>
                </div>
            <p>{description}</p>
            <button onClick={handleSelectCart} className="my-5 text-white bg-red-500 px-3 py-2">Add to Cart</button>
        </div>
            </div>
    );
};

export default ProductDetail;