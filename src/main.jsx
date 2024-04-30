import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './assets/layout/Root.jsx';
import ErrorPage from './assets/components/Pages/ErrorPage.jsx';
import Home from './assets/components/Pages/Home/Home.jsx';
import About from './assets/components/About.jsx';
import Contact from './assets/components/Pages/Contact/Contact.jsx';
import Login from './assets/components/Pages/Login/Login.jsx';
import Register from './assets/components/Pages/Register/Register.jsx';
import AuthProvider from './assets/components/Provider/AuthProvider.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyList from './assets/components/Pages/MyList/MyList.jsx';
import AddTourist from './assets/components/Pages/AddTourist/AddTourist.jsx';
import AllSpot from './assets/components/Pages/AllSpot/AllSpot.jsx';
import SpotDetails from './assets/components/SpotDetails.jsx';
import UpdateSpot from './assets/components/UpdateSpot.jsx';
import PrivateRoutes from './assets/components/Pages/routes/PrivateRoutes.jsx';
import Country from './assets/components/Pages/Home/Country.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
            const addedSpotResponse = await fetch('https://y-plum-ten.vercel.app/addedSpot');
            const countryResponse = await fetch('https://y-plum-ten.vercel.app/country');
    
            const addedSpotData = await addedSpotResponse.json();
            const countryData = await countryResponse.json();
    
            return { addedSpotData, countryData };
        }
    },
    
        {
            path: '/about',
            element: <About></About>
        },
        {
          path: '/allSpot',
          element: <AllSpot/>
        },
        {
          path: '/country',
          element: <Country/>
        },
        {
          path:"/spotDetails/:id" ,
          element:<PrivateRoutes><SpotDetails/></PrivateRoutes> ,
        },
        {
          path: '/myList',
          element: <PrivateRoutes><MyList/></PrivateRoutes>
        },
        {
        path: '/addedSpot',
        element: <PrivateRoutes><AddTourist/></PrivateRoutes>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path : '/updatedSpot/:id',
          element : <UpdateSpot/>,
          //loader : ({params}) => fetch(`https://y-plum-ten.vercel.app//addedSpot/${params._id}`)
        }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>
  </React.StrictMode>,
)
