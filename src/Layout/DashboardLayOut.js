import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from '../DashboardPage/SharedPage/Header';

const DashboardLayOut = () => {
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to={'/dashboard/appointment'}>My Appointment</Link></li>
                        <li><Link to={'/dashboard/add-doctor'}>Add Doctor</Link></li>
                        <li><Link to={'/dashboard/manage-doctors'}>Add Doctor</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayOut;