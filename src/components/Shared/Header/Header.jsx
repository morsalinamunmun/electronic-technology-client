import { Link } from "react-router-dom";
import img from "../../../assets/letter_e.png"
import { BsSearch } from 'react-icons/bs';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then(()=> console.log('logout'))
        .catch(error=> console.error(error))
    }
    return (
        <div className="bg-gray-200 ">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <img className="w-14" src={img} alt="" />
                    <a className="normal-case text-xl greatVibes font-semibold">Electronics Technology</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <form className="flex items-center">
                        <input type="text" name="" id=""placeholder="Search..." className="py-2 px-3"/>
                        <button className="bg-blue-900 text-white px-3 py-3 rounded-r"><BsSearch></BsSearch></button>
                    </form>
                </div>
                <div className="navbar-end"> 
                {
                    user ? 
                    <>
                         <div className="dropdown dropdown-end">
                            <label   tabIndex ={0} className="btn btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="p-2 shadow menu menu-sm dropdown-content z-[1] bg-base-100 rounded-box w-36">
                                <li className="font-semibold text-center mb-2">{user.displayName}</li>
                                <li><a onClick={handleLogOut} className="py-2 px-3 text-white flex mx-auto text-center font-semibold rounded bg-blue-900 cursor-pointer">Sign Out</a></li>
                            </ul>
                        </div>                       
                    </> : <Link to='/signin' className=" cursor-pointer py-2 px-3 text-white font-semibold rounded bg-blue-900">Sign In</Link>
                }
                </div>
            </div>
        </div>    
    );
};

export default Header;