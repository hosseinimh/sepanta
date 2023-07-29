import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Section/Footer";
import Header from "../components/Section/Header";
import Siderbar from "../components/Section/Sidebar";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const PanelLayout = () => {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.userReducer);
    const location = useLocation();
    
    useEffect(() => {
        if (!userState.isAuthenticated) {
            navigate("/login");
        }
    }, []);
    useEffect(() => {
        if (location.pathname === "/panel" && userState.isAuthenticated) {
            navigate("/panel/dashboard");
        }
    }, []);

    return (
        <div className="container lg:max-w-5xl xl:max-w-7xl mx-auto bg-mainBgColor rounded-[50px] shadow-2xl my-5">
            <div className="flex ">
                <Siderbar />
                <div className="flex-1 flex flex-col min-h-screen">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default PanelLayout;
