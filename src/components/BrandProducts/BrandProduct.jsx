import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BrandProduct = ({brandProduct}) => {
    const { _id, image_url, name, product, rating, description, price} = brandProduct;
    return (
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="w-56 h-56"><img className="w-full h-full" src={image_url} alt="product" /></figure>
                                <div className="card-body">
                                    <h2 className="text-xl font-bold text-blue-800">{name}</h2>
                                    <div className="badge badge-outline">Price: {price}</div> 
                                    <h2 className="card-title">{product}
                                    <div className="badge badge-secondary">{rating}</div></h2>
                                    <p>{description}</p>
                                   
                                    <div className="card-actions items-center justify-end">
                                        <Link to={`/updateProducts/${_id}`}><button className="bg-blue-800 font-semibold p-2 rounded text-white">Update</button></Link>
                                        <Link to={`/details/${_id}`}><button className="text-blue-800 p-2 font-semibold outline rounded">Details</button></Link>
                                    </div>
                                </div>
                            </div>
    );
};

export default BrandProduct;