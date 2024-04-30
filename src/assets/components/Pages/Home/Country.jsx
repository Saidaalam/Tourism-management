import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Country = () => {

    const [countries, setTours] = useState([]);

    useEffect(() => {
        fetch("https://y-plum-ten.vercel.app/country")
            .then(response => response.json())
            .then(data => {
                setTours(data);
            })
            .catch(error => {
                console.error('Error fetching tour data:', error);
            });
    }, []);
  
  return (
   <Link to={`/allSpot`}>
    <div className="mt-10">
                    <h2 className="text-4xl font-bold text-center">Choose your Dream Country </h2>
                    <p className="text-center mt-6">Embark on an Unforgettable Journey: uncover the hidden gems and iconic landmarks that await discovery, promising <br/>unforgettable experiences and memories to last a lifetime.</p>
                   
                    <div className="grid grid-cols-3 gap-6 mt-10 ">
                {countries.map((country) => (
                    <div key={country._id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img className="h-60 rounded-xl" src={country.image} alt={country.Country_Name} />
                        </figure>
                        <div className="card-body dark:bg-[#120505] dark:text-white ">
                            <h2 className="card-title"><span>Name : </span>{country.Country_Name}</h2>
                            <p><span className="font-semibold">Description : </span>{country.description}</p>
                            </div>
                        </div>
                ))}
            </div>
        </div>
   </Link>
  );
};

export default Country;
