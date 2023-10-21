import Swal from "sweetalert2";

const Cart = ({cart, carts, setCarts}) => {
    const {_id, image_url, description, price, product} = cart;
    const handleDelete = _id =>{
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://electronics-technology-server.vercel.app/cart/${_id}`, {
                method: "DELETE"
              })
              .then(res=> res.json())
              .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )   
                    const remaining = carts.filter(deleteCart=> deleteCart.id !== _id)
                    setCarts(remaining); 
                }
              })
            }
          })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure className="w-56 h-46"><img className="w-full h-full" src={image_url} alt="image"/></figure>
  <div className="card-body">
    <h2 className="card-title">{product}</h2>
    <p>{description}</p>
    <p><span className="font-bold">Price: </span>{price}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cart;