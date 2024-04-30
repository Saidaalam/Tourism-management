import { useEffect} from "react";
import Navbar from "../../Navbar";
import Bannar from "../../Bannar";
import Footer from "../../Footer";
import TouristReview from "../../TouristReview";
import TourDetails from "../../TourDetails";
import Newsletter from "../../Newsletter";
import Country from "./Country";

const Home = () => {

    useEffect(() => {
         document.title = "TravelWise";
    }, []);


    return (
        <div className="bg-white dark:bg-[#120505] dark:text-white px-6">
            <Navbar/>
            <Bannar />
            <TourDetails />
            <Country/>
            <TouristReview />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
