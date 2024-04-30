import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from "./Footer";
import Navbar from "./Navbar";

const SpotDetails = () => {
    const { id } = useParams();
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch("https://y-plum-ten.vercel.app/addedSpot")
            .then(response => response.json())
            .then(data => {
                setTours(data);
            })
            .catch(error => {
                console.error('Error fetching tour data:', error);
            });
    }, []);

    const tour = tours.find(tour => tour._id === id);

    if (!tour) {
        return <span className="loading loading-bars loading-lg"></span>;
    }

    const { image, name, description, country, spot, cost, tourist, time } = tour;

    return (
        <div className='dark:bg-[#120505] dark:text-white '>
            <Navbar />
            <div className="card card-side bg-base-100 shadow-xl mt-4 p-6">
                <figure>
                    <img className="h-full rounded-xl" src={image} alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <p className="mt-4 text-lg"><span className="font-semibold">Description: </span>{description}</p>
                    <div className="mb-2"><span className="font-semibold">Country: </span>{country}</div>
                    <div className="mb-2"><span className="font-semibold">Location: </span>{spot}</div>
                    <div className="mb-2"><span className="font-semibold">Tourist per year: </span>{tourist}</div>
                    <div className="mb-2"><span className="font-semibold">Average Cost: </span>{cost}</div>
                    <div><span className="font-semibold">Time: </span>{time}</div>
                    <button className="btn dark:bg-violet-600 bg-slate-900 text-white">
                     <Link to={`/mylist/${tour._id}`}>Add to Cart</Link>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SpotDetails;
