
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
const AddTourist = () => {


  const {user} = useAuth() || {};
    const handleAddTouristSpot = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const country = formData.get('country');
        const image = formData.get('image');
        const time = formData.get('time');
        const spot = formData.get('spot');
        const tourist = formData.get('tourist');
        const cost = formData.get('cost');
        const description = formData.get('description');
        const email = user.email;
    
        const info = { name, tourist, spot, country, image, cost, time, description, email };
        
        fetch("https://y-plum-ten.vercel.app/addedSpot", {
          method : "POST",
          headers : {
            "Content-type" : "application/json"
          },
          body : JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            toast.success("Tourist Added successful!");
          }else {
            toast.error("An error occurred. Please try again.");
          }
        })
        
        console.log(info);
    };
    
    return (
        <div className="dark:bg-[#120505] dark:text-white  px-10">
        <Navbar/>
        <div className="pt-10">
      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="dark:text-white">
               Add Tourist Spot
            </span>
          </p>
        </div>
        <form onSubmit={handleAddTouristSpot}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                Tourist Spot Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#274675]"
                type="text"
                placeholder="Tourist Spot"
                id="name"
                name="name"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="country"
              >
                Country Name
              </label>
              <select
    name="country"
    id="country"
    className="w-full p-2 border rounded-md focus:outline-[#274675]"
    type="text"
    placeholder="Country"
    defaultValue="Bangladesh" 
>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Thailand">Thailand</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Cambodia">Cambodia</option>
</select>


              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="cost"
              >
                Average Cost
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#274675]"
                type="text"
                placeholder="Enter Cost"
                id="cost"
                name="cost"
              />
               <label className="block mb-2 dark:text-white" htmlFor="season">
                Seasonality
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#274675]"
                type="text"
                placeholder="Seasonality"
                id="season"
                name="season"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#274675]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
              />
              <label className="block mb-2 mt-4 dark:text-white" htmlFor="spot">
                Location
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#274675]"
                type="text"
                placeholder="Enter Location"
                id="spot"
                name="spot"
              />

             <label className="block mb-2 dark:text-white" htmlFor="time">
                Travel Time
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#274675]"
                type="text"
                placeholder="Travel Time"
                id="time"
                name="time"
              />
               <label className="block mb-2 dark:text-white" htmlFor="tourist">
                Total Visit Per Year
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#274675]"
                type="text"
                placeholder="Total Visit"
                id="tourist"
                name="tourist"
              />
              
            </div>
          </div>
          <label className="block mb-2 dark:text-white" htmlFor="description">
                Description
              </label>
              <input
                className="w-full p-10 border rounded-md focus:outline-[#274675]"
                type="text"
                placeholder="Description"
                id="description"
                name="description"
              />
          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#3180ab]  bg-[#274675] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Spot"
          />
        </form>
        <ToastContainer />
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AddTourist;