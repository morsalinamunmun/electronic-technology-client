
const Cart = ({cart}) => {
    const {_id, image_url, description, price, product} = cart;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure className="w-56 h-46"><img className="w-full h-full" src={image_url} alt="image"/></figure>
  <div className="card-body">
    <h2 className="card-title">{product}</h2>
    <p>{description}</p>
    <p><span className="font-bold">Price: </span>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cart;