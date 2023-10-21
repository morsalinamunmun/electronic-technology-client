import { Link } from "react-router-dom";

const Brand = ({brand}) => {
    const { brand_img, brand_name} = brand;

    return (
            <Link to={`/brands/${brand_name}`} >
                        <div className="bg-gray-200  rounded pt-5 pb-10" >
                            <div className="w-64 flex mx-auto h-56">
                                <img className="w-full h-full" src={brand_img} alt="" />
                            </div>
                            <p className="text-center pt-5">{brand_name}</p>
                        </div>
            </Link>
    );
};

export default Brand;