import {Outlet} from "react-router-dom";
import React from "react";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";

const DashboardLayout = () => {
    return (
        <>
            <Header/>
            <div className="content">
                <Nav/>
                <div>
                    <Outlet/>
                </div>
            </div>

        </>
    )
}

export default DashboardLayout;