import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

const TourDetails = () => {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        fetch("https://y-plum-ten.vercel.app/addedSpot")
            .then(response => response.json())
            .then(data => {
                setTours(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching tour data:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="mt-10">
            {isLoading && ( 
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-75 flex justify-center items-center z-50">
                    <div><span className="loading loading-bars loading-lg"></span></div>
                </div>
            )}
            <h2 className="text-4xl font-bold text-center">
            <Typewriter
            words={['Choose your destination!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
                
                </h2>
            <p className="text-center mt-6">Embark on an Unforgettable Journey: uncover the hidden gems and iconic landmarks that await discovery, promising unforgettable experiences and memories to last a lifetime.</p>
            <div className="grid grid-cols-3 gap-6 mt-10 ">
                {tours.map((tour) => (
                    <div key={tour._id} className="card dark:bg-black bg-base-100 shadow-xl">
                        <figure>
                            <img className="h-60 p-4 rounded-xl" src={tour.image} alt={tour.name} />
                        </figure>
                        <div className="card-body dark:bg-[#120505] dark:text-white ">
                            <h2 className="card-title">{tour.name}</h2>
                            <p>{tour.description}</p>
                            <div className="mb-2 font-semibold">Location: {tour.spot}</div>
                            <div className="card-actions justify-between">
                                <div className="badge badge-outline p-4">Price: {tour.cost}</div>
                                <div className="badge badge-outline p-4">Country: {tour.country}</div>
                            </div>
                            <div className="card-actions justify-center mt-4">
                                <button className="btn dark:bg-violet-600 bg-slate-900 text-white">
                                    <Link to={`/spotDetails/${tour._id}`}>View Details</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourDetails;
