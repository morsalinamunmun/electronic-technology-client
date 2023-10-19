import Navbar from "../../Shared/Navbar/Navbar";
import Swal from 'sweetalert2'
const AddProducts = () => {
    const handleAddProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const product = form.product.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;
        
        const productInfo = {name, product, type, rating, price, description, image_url}
        
        //send form data to server
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
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
        <>
        <Navbar></Navbar>
        <div className="bg-[#F4F3F0] p-10">
        <h2 className="text-3xl font-extrabold">Add Products</h2>
        <form onSubmit={handleAddProduct}>
            <div className="md:flex gap-5"> 
                <div className="md:w-1/2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Brand Name" name="name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="product" placeholder="Product Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Types of Product</span>
                        </label>
                        <label className="input-group">
                            <select className="select select-bordered w-full " name="type">
                                <option disabled selected className="w-full">Type of product</option>
                                    <option>Phone</option>
                                    <option>Computer</option>
                                    <option>Laptop</option>
                                    <option>Headphone</option>
                                    <option>Processor</option>
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
                            <input type="number" name="rating" min="1" max="5" placeholder="Rating" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image_url" placeholder="Photo Url" className="input input-bordered w-full" required />
                    </label>
            </div>
            <input type="submit" value="Add Product" className=" mt-10 btn btn-block bg-blue-900 text-white" />
        </form>
    </div>
    </>
    );
};

export default AddProducts;