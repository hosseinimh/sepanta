import React from "react";
import { Link } from "react-router-dom";
import { general } from "../../constants/strings/fa";
import logo from "../../images/logo-sepanta.png";

const HomePage = () => {
    return (
        <div className="container overflow-hidden">
            <div className="flex flex-col min-h-screen items-center justify-center max-w-7xl mx-auto ">
                <img src={logo} alt="" />
                {/* <h1 className=" text-3xl mb-3">{general.brand}</h1> */}
                <Link to="/login">
                    <button className="btn-primary w-100 text-xl font-light px-20">
                        {general.userLoginSystem}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
