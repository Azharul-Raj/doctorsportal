import { createBrowserRouter } from "react-router-dom";
import AppointmentPage from "../pages/AppointmentPage/AppointmentPage";
import AddDoctor from "../pages/Dashboard/AddDoctor/AddDoctor";
import Doctors from "../pages/Dashboard/Doctors/Doctors";
import MyAppointments from "../pages/Dashboard/MyAppointments/MyAppointments";
import Payment from "../pages/Dashboard/Payment/Payment";
import Users from "../pages/Dashboard/Users/Users";
import Login from "../pages/Forms/Login";
import Register from "../pages/Forms/Register";
import HomePage from "../pages/HomePage/HomePage";
import UserProtected from "../pages/Protected/UserProtected";
import DashboardLayout from "./DashboardLayout";
import Main from "./Main";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<HomePage/>
            },
            {
                path: '/appointment',
                element:<AppointmentPage/>
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/register',
                element:<Register/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element:<MyAppointments/>
            },
            {
                path: '/dashboard/my_appointments',
                element:<MyAppointments/>
            },
            {
                path: '/dashboard/users',
                element:
                    <UserProtected>
                    <Users />
                </UserProtected>
            },
            {
                path: '/dashboard/add_doctor',
                element:
                    <UserProtected>
                    <AddDoctor />
                </UserProtected>
            },
            {
                path: '/dashboard/doctors',
                element:
                    <UserProtected>
                    <Doctors />
                </UserProtected>
            },
            {
                path: '/dashboard/payment/:id',
                element:
                    <Payment />,
                loader:({params})=>fetch(`/booking/${params.id}`)
            }
        ]
    }
])