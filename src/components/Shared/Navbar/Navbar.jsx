import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
    <li><NavLink to='/' className={({isActive, isPending})=> isPending ? "pending" : isActive ? "text-blue-500 border-r-2 border-blue-500 pr-2" : ""}>Home</NavLink></li>
    <li><NavLink to='/about' className={({isActive, isPending})=> isPending ? "pending" : isActive ? "text-blue-500 border-r-2 border-blue-500 pr-2" : ""}>About Us</NavLink></li>
    <li><NavLink to='/products' className={({isActive, isPending})=> isPending ? "pending" : isActive ? "text-blue-500 border-r-2 border-blue-500 pr-2" : ""}>Add Products</NavLink></li>
    <li><NavLink to='/card' className={({isActive, isPending})=> isPending ? "pending" : isActive ? "text-blue-500 border-r-2 border-blue-500 pr-2" : ""}>My Card</NavLink></li>
    <li><NavLink to='/gallery' className={({isActive, isPending})=> isPending ? "pending" : isActive ? "text-blue-500 border-r-2 border-blue-500 pr-2" : ""}>Gallery</NavLink></li>
</>
    return (
        <div className="navbar-center text-white bg-amber-500 max-w-md lg:flex mx-auto py-5">
                <div className="flex mx-auto">
                    <ul className="flex gap-5 menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
    </div>
    );
};

export default Navbar;