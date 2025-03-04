import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home/Home";
import Login from "../components/Log/Login";
import Register from "../components/Log/Register";
import CheckOut from "../components/Home/Services/CheckOut";
import Bookings from "../components/Home/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";
import About from "../components/Home/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                path: '/checkout/:id',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({params}) => fetch(`https://car-doctor-server-flame-pi.vercel.app/services/${params.id}`)
            },
            {
                path: "/bookings",
                element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])
export default router;