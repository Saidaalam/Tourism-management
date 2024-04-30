import { useEffect, useState } from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyList = () => {
    const { user } = useAuth() || {};
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://y-plum-ten.vercel.app/addedSpot/${user?.email}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                return res.json();
            })
            .then((data) => {
                setList(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [user]);

    const handleDelete = id => {
        fetch(`http://localhost:5000/addedSpot/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if (!res.ok) {
                throw new Error("Failed to delete spot");
            }
            return res.json();
        })
        .then(data => {
            if (data.deletedCount > 0) {
                console.log('Deleted Successfully');
                const remainingSpots = list.filter(item => item._id !== id);
                setList(remainingSpots);        
            }
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                   console.log('delete confirmed');
                }
            });
        });
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="dark:bg-[#120505] dark:text-white px-10">
            <Navbar/>
            <h2 className="text-4xl font-bold text-center mt-10">Added Spot</h2>
            {list.length === 0 && <p>No spots added yet.</p>}
            <div className="overflow-x-auto">
                <table className="table mt-8 ">
                    <thead>
                        <tr className="dark:text-white">
                            <th>Name</th>
                            <th>Location</th>
                            <th>Cost</th>
                            <th>Update Button</th>
                            <th>Delete Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((p) => (
                            <tr key={p._id}>
                                <td>{p.name}</td>
                                <td>{p.spot}</td>
                                <td>{p.cost}</td>
                                <td><Link to={`/updatedSpot/${p._id}`}><button className="btn">Update</button></Link></td>
                                <td><button onClick={ () => handleDelete(p._id)} className="btn">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );
};

export default MyList;
