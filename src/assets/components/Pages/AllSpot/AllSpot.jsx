import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { Typewriter } from 'react-simple-typewriter'

const AllSpot = () => {
    const [touristSpots, setTouristSpots] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [error, setError] = useState(null);

    useEffect(() => {
        document.title = "TravelWise";
      }, []);

    const fetchTouristSpots = async () => {
        try {
            const response = await fetch('https://y-plum-ten.vercel.app/addedSpot');
            if (!response.ok) {
                throw new Error('Failed to fetch tourist spots');
            }
            const data = await response.json();
            setTouristSpots(data);
        } catch (error) {
            console.error('Error fetching tourist spots:', error);
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchTouristSpots();
    }, []);

    const handleSortChange = (event) => {
        const selectedOrder = event.target.value;
        setSortOrder(selectedOrder);
        const sortedSpots = [...touristSpots].sort((a, b) => {
            const costA = parseInt(a.cost);
            const costB = parseInt(b.cost);
            if (selectedOrder === 'asc') {
                return costA - costB;
            } else {
                return costB - costA;
            }
        });
        setTouristSpots(sortedSpots);
    };

    return (
        <div className="dark:bg-[#120505] dark:text-white  px-6">
            <Navbar />
            <div>
                <div className="mt-10">
                    <h2 className="text-4xl font-bold text-center">
                    <Typewriter
            words={[' Explore Spectacular Spot!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
            </h2>
                    <p className="text-center mt-6">Embark on an Unforgettable Journey: uncover the hidden gems and iconic landmarks that await discovery, promising <br/>unforgettable experiences and memories to last a lifetime.</p>
                   
                    <select className="rounded-xl p-3 bg-slate-600 text-white" value={sortOrder} onChange={handleSortChange}>
                        <option value="asc">Sort by Cost</option>
                        <option value="asc">Sort by Cost (Low to High)</option>
                        <option value="desc">Sort by Cost (High to Low)</option>
                    </select>

                    {error && <div className="text-red-500">{error}</div>}

                    <div className="grid grid-cols-3 gap-6 mt-10">
                        {touristSpots.map((spot) => (
                            <div key={spot._id} className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img className="h-60 rounded-xl" src={spot.image} alt={spot.name} />
                                </figure>
                                <div className="card-body dark:bg-[#120505] dark:text-white">
                                    <h2 className="card-title">{spot.name}</h2>
                                    <p>{spot.description}</p>
                                    <div className="mb-2 font-semibold">Location: {spot.spot}</div>
                                    <div className="card-actions justify-between">
                                        <div className="badge badge-outline p-4">Price: {spot.cost}</div>
                                        <div className="badge badge-outline p-4">Country: {spot.country}</div>
                                    </div>
                                    <div className="card-actions justify-center mt-4">
                                        <button className="btn dark:bg-violet-600 bg-slate-900 text-white">
                                            <Link to={`/spotDetails/${spot._id}`}>View Details</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default AllSpot;
