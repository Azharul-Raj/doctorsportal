import { createBrowserRouter } from "react-router-dom";
import AppointmentPage from "../pages/AppointmentPage/AppointmentPage";
import HomePage from "../pages/HomePage/HomePage";
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
            }
        ]
    }
])