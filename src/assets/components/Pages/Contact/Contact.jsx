import contact from "../../../../images/contact.png"
import Footer from "../../Footer";
import { useEffect } from "react";
import Navbar from "../../Navbar";
const Contact = () => {
    useEffect(() =>{
        document.title = "TravelWise";
   },[]);
    return (

        <div className="dark:bg-[#120505] dark:text-white px-10">
       <Navbar></Navbar>

        <div className="grid grid-cols-1 mt-4 bg-cyan-600 text-white pt-10 px-10 mx-auto rounded-lg md:grid-cols-2">
        <div className="flex flex-col justify-between">
            <div className="space-y-2 ml-20">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let us talk!</h2>
                <div className="dark:text-gray-600">We are always ready to serve you the best</div>
            </div>
            <img className="mt=2" src={contact} />
        </div>
        <form noValidate="" className="space-y-6 mt-14">
            <div>
                <label htmlFor="name" className="text-sm">Full name</label>
                <input id="name" type="text" placeholder="Enter Your Name" className="w-full p-3 rounded dark:bg-gray-100" />
            </div>
            <div>
                <label htmlFor="email" className="text-sm">Email</label>
                <input id="email" type="email" placeholder="Enter Your Email" className="w-full p-3 rounded dark:bg-gray-100" />
            </div>
            <div>
                <label htmlFor="message" className="text-sm">Message</label>
                <textarea id="message" rows="3" className="w-full p-3 rounded"></textarea>
            </div>
            <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-slate-800 text-gray-50">Send Message</button>
        </form>
    </div>
    <Footer/>
    </div>
    );
};

export default Contact;