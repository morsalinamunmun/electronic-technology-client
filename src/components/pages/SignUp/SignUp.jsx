
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Toaster, toast } from "react-hot-toast";

const SignUp = () => {
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const {createUser, updateProfileData} = useContext(AuthContext);
  const handleSignUp = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const image_url = form.get('image_url')
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, email, password)
    if(password.length < 6){
      setError('Password should be at least 6 characters or longer');
      return;
  }else if(!/[A-Z]/.test(password)){
      setError('Password should have at least one uppercase characters.')
      return;
  }else if(!/[!@#$%^&*]/.test(password)){
    setError('Password should have at least one Special characters.')
    return;
  }else{
    toast.success('Register has been successfully')
  }
  setError(' ');
    createUser(email, password)
    .then(result=>{
      console.log(result.user);
      updateProfileData(name, image_url)
      .then(res=> {console.log(res.user)})
       navigate(location?.state? location.state: '/signin')
    })
    .catch(error=> console.error(error));
  }
  return (
      <div>
            <Navbar></Navbar>
            <div className="card flex-shrink-0 w-full max-w-sm my-10 shadow-2xl flex mx-auto bg-base-100">
                <h2 className="p-5 text-2xl font-bold">Sign Up Now</h2>
              <form className="card-body" onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label className="label">
                              <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="User Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                              <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="image_url" placeholder="Image url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                              <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        {
                            error && <p className="text-red-500">{error}</p>
                        }
                        <label className="label">
                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-blue-900 text-white">Sign Up</button>
                    </div>
                    <p className="mt-2">Already have an account? <Link className="text-blue-500 underline ml-2" to='/signin'>Sign Up</Link></p>
                </form>
            </div>
            <Toaster></Toaster>
      </div>
    );
};

export default SignUp;