import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Swal from "sweetalert2";

const UpdateProducts = () => {
    const brands = useLoaderData();
    const {_id, image_url, name, product, rating, description, price, type} = brands;
    console.log(brands);
    const handleUpdateProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const product = form.product.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;
        
        const updateProductInfo = {name, product, type, rating, price, description, image_url}
        
        //send form data to server
        fetch(`http://localhost:5000/brands/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateProductInfo)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Product Update successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        }) 
    }
    return (
        <>
        <Navbar></Navbar>
        <div className="bg-[#F4F3F0] p-10">
        <h2 className="text-3xl font-extrabold">Update Products</h2>
        <form onSubmit={handleUpdateProduct}>
            <div className="md:flex gap-5"> 
                <div className="md:w-1/2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Brand Name" defaultValue={name} name="name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text"  name="product" defaultValue={product}   placeholder="Product Name"  className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Types of Product</span>
                        </label>
                        <label className="input-group">
                            <select className="select select-bordered w-full " name="type" defaultValue={type}>
                                <option disabled selected className="w-full">Type of product</option>
                                    <option>Phone</option>
                                    <option>Computer</option>
                                    <option>Laptop</option>
                                    <option>Headphone</option>
                                    <option>Processor</option>
                                    <option>Fridge</option>
                                    <option>Tv</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" defaultValue={rating}  min="1" max="5" placeholder="Rating" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image_url" defaultValue={image_url} placeholder="Photo Url" className="input input-bordered w-full" required />
                    </label>
            </div>
            <input type="submit" value="Update Product" className=" mt-10 btn btn-block bg-blue-900 text-white" />
        </form>
    </div>
    </>
    );
};

export default UpdateProducts;