import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../pages/shared/Header/Header";
import useAdmin from '../hooks/useAdmin';
import { authContext } from "../contexts/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(authContext);
  const [isAdmin] = useAdmin(user?.email)
  console.log( isAdmin);
  return (
    <div>
      <Header />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet />
          {/* <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-black">
            <li>
              <Link to='/dashboard/my_appointments'>My Appointments</Link>
            </li>
            {isAdmin &&
              <>
              <li>
              <Link to='/dashboard/users'>All Users</Link>
              </li>
              <li>
              <Link to='/dashboard/add_doctor'>Add Doctor</Link>
              </li>
              <li>
              <Link to='/dashboard/doctors'>Doctors List</Link>
              </li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
