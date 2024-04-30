import { Link} from "react-router-dom";
import Navbar from "../../Navbar";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {  useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import app from '../../../firebase/firebase.config'; 

const Login = () => {

  useEffect(() => {
    document.title = "TravelWise";
}, []);

  const [showPassword, setShowPassword] = useState(false);
  const auth = getAuth(app);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Login successful!");
      })
      .catch(error => {
        console.error(error);
        if (error.code === "auth/wrong-password") {
          toast.error("Invalid email or password. Please try again.");
        } 
      });
  };

  const handleGoogleSignIn = () => {
    const GoogleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, GoogleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log('error', error.message);
      });
  }

  const handleGithubSignIn = () => {
    const GithubProvider = new GithubAuthProvider();
    signInWithPopup(auth, GithubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log('error', error.message);
      });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="dark:bg-[#120505] dark:text-white">
      <Navbar />
      <h2 className="text-3xl text-center mt-6 mb-4 dark:text-white">Login your account</h2>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body pb-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="input input-bordered w-80"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-xl absolute right-4 top-3 dark:text-white"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover mt-2">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-4">
              <button className="btn bg-slate-900 text-white">Login</button>
            </div>
            <div className="dark:text-slate-800"> 
              <button className="text-4xl ml-24 mt-4 top-4" onClick={handleGoogleSignIn}><FaGoogle /></button>
              <button className="text-4xl ml-16 mt-4 top-4" onClick={handleGithubSignIn}><FaGithub /></button>
            </div>
            <ToastContainer />
          </form>
          <p className="text-center mb-6 dark:text-black">
            Do not have an account?{" "}
            <Link to="/register">
              <span className="text-red-700">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
