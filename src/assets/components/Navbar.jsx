import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../components/Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  const handleSignOut = () => {
    logOut().catch((error) => {
      console.error("Sign out failed:", error);
    });
  };

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
    document.body.classList.toggle("dark");
  };

  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/allSpot">All Tourists Spot</NavLink></li>
      <li><NavLink to="/addedSpot">Add Tourists Spot</NavLink></li>
      <li><NavLink to="/myList">My List</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </>
  );

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="navbar mt-6">
        <div className="navbar-start">
          <div className="dropdown">
            <h2 className="text-3xl font-bold">TravelWise</h2>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <button className=" dark:bg-violet-600 bg-black text-white dark:text-white rounded-full w-14 h-12 " onClick={toggleMode}>
            {darkMode ? 'Light' : 'Dark'}
          </button>
          <div className="w-12 rounded-full"></div>
          {user ? (
             <>
             <div className="flex items-center gap-2">
               <img src={user.photoURL} alt="User Photo" className="w-8 h-8 rounded-full cursor-pointer" title={user.displayName} />
               <button onClick={handleSignOut} className="btn dark:bg-violet-600 bg-slate-800 text-white px-10">Logout</button>
             </div>
           </>
           ) : (
            <Link to="/login" className="btn dark:bg-violet-600 bg-slate-800 text-white px-10">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
