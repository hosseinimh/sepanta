import { NavLink, useNavigate } from "react-router-dom";
import { sidebar } from "../../../constants/strings/fa";
import React, { useState } from "react";
import logo from "../../../images/logo-sepanta.png";
import { User } from "../../../http/entities/User";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../../../state/user/userAction";

const Siderbar = () => {
    const userState = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const user = new User();
    const navigate = useNavigate();
    const menuItems = [
        { title: `${sidebar.dashboard}`, icon: "category4", to: "dashboard" },
        {
            title: `${sidebar.driversManagement}`,
            icon: "people4",
            to: "drivers",
            submenu: [
                {
                    title: `${sidebar.drivers}`,
                    to: "drivers",
                    icon: "people4",
                    style: "",
                },
                {
                    title: `${sidebar.addDriver}`,
                    to: "driver/add",
                    icon: "profile-add4",
                    style: "",
                },
            ],
        },
        {
            title: `${sidebar.carsManagement}`,
            icon: "truck3",
            submenu: [
                {
                    title: `${sidebar.cars}`,
                    to: "cars",
                    icon: "truck-fast3",
                    style: "",
                },
                {
                    title: `${sidebar.addCar}`,
                    to: "car/add",
                    icon: "truck-tick4",
                    style: "",
                },
            ],
        },
        {
            title: `${sidebar.tanksManagement}`,
            icon: "colorfilter4",
            submenu: [
                {
                    title: `${sidebar.tanks}`,
                    to: "tanks",
                    icon: "colorfilter4",
                    style: "",
                },
                {
                    title: `${sidebar.addTank}`,
                    to: "tank/add",
                    icon: "add-square",
                    style: "",
                },
            ],
        },
        {
            title: `${sidebar.userManagement}`,
            icon: "personalcard",
            style: "",
            submenu: [
                {
                    title: `${sidebar.users}`,
                    to: "users",
                    icon: "people4",
                    style: "",
                },
                {
                    title: `${sidebar.addUsers}`,
                    to: "user/add",
                    icon: "profile-add4",
                    style: "",
                },
                {
                    title: `${sidebar.changePassword}`,
                    to: "user/change_password",
                    icon: "profile-add4",
                    style: "",
                },
            ],
        },
    ];

    const logoutHandler = () => {
        if (userState.isAuthenticated) {
            user.logOut();
            dispatch(userLogOut());
            navigate("/login");
        }
    };

    return (
        <div className=" w-60 min-h-min bg-navBgColor text-primaryColor my-3 mr-6 ml-2 py-5 pl-4 rounded-[50px] shadow-xl">
            <div className="flex items-center justify-center mb-5 pb-5 border-b mr-5 border-primaryColor">
                <img src={logo} alt="" className="w-20 h-20" />
            </div>

            <ul>
                {menuItems.map((menu, index) => {
                    return <MenuItem item={menu} key={index} id={index} />;
                })}

                <li
                    className="flex items-center relative h-[50px] mb-1 pr-5 dark:text-primaryColor text-red-500 cursor-pointer "
                    onClick={logoutHandler}
                >
                    <i className="icon-logout4 text-xl ml-3"></i>
                    <div className="xl:flex items-center w-full justify-between hidden text-sm  ">
                        {sidebar.logout}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Siderbar;

export const MenuItem = ({ item, index, id }) => {
    const [subMenu, setSubMenu] = useState(false);
    const [sub, setSub] = useState(false);
    const submenuHandler = (id) => {
        const allUlSubmenu = document.querySelectorAll(".clickSlide ul");
        const allclickSlide = document.querySelectorAll(".clickSlide");
        const arrayUlSubmenu = [...allUlSubmenu];
        arrayUlSubmenu.map((sub) => {
            sub.style.display = "none";
        });
        const arrayClickSlide = [...allclickSlide];
        const findClickSlide = arrayClickSlide.find((item) => item.id == id);
        arrayClickSlide.map((sub) => {
            sub.setAttribute("aria-expanded", false);
            findClickSlide.childNodes[1].style.height = 0;
            findClickSlide.childNodes[1].style.overflow = "hidden";
        });
        findClickSlide.childNodes[1].style.display = "block";
        findClickSlide.childNodes[1].style.background = "#00000006";
        findClickSlide.childNodes[1].style.height = "auto";
        findClickSlide.setAttribute("aria-expanded", true);
    };
    return (
        <>
            {item.submenu ? (
                <>
                    <li
                        // aria-expanded={subMenu ? "true" : "false"}
                        role="link"
                        className="clickSlide"
                        id={id}
                        onClick={() => submenuHandler(id)}
                    >
                        <NavLink
                            className={
                                sub
                                    ? "bg-slate-100 flex items-center text-slate-800 h-[50px] mb-1 pr-5 rounded-l-xl relative z-10  "
                                    : "flex items-center text-primaryColor relative h-[50px] mb-1 pr-5 rounded-l-xl dark:text-primaryColor "
                            }
                        >
                            <i className={`icon-${item.icon} text-xl ml-3`}></i>
                            <div className="xl:flex items-center w-full justify-between hidden text-sm">
                                {item.title}
                                {subMenu ? (
                                    <i className="icon-arrow-up before:content-['\eeb2']"></i>
                                ) : (
                                    <i className="icon-arrow-bottom before:content-['\ee9b']"></i>
                                )}
                            </div>
                        </NavLink>
                        <Dropdown
                            submenus={item.submenu}
                            // dropdown={subMenu}
                            sub={sub}
                            setSub={setSub}
                        />
                    </li>
                </>
            ) : (
                <li>
                    <NavLink
                        to={item.to}
                        key={index}
                        className={(navData) => {
                            return navData.isActive
                                ? " flex items-center font-bold text-white bg-btnPrimaryColor h-[50px] mb-1 pr-5 rounded-l-xl relative z-10 dark:text-warningColor"
                                : `flex items-center text-primaryColor relative h-[50px] mb-1 pr-5 rounded-l-xl hover:bg-btnPrimaryColor hover:text-white dark:text-primaryColor ${item.style} `;
                        }}
                    >
                        <i className={`icon-${item.icon} text-xl ml-3`}></i>
                        <div className="xl:flex items-center w-full justify-between hidden text-sm  ">
                            {item.title}
                        </div>
                    </NavLink>
                </li>
            )}
        </>
    );
};

export const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul
            className={`mr-1 xl:mr-0 ${
                dropdown
                    ? "h-auto rounded-lg bg-[#00000006] dark:bg-[#0000001a]"
                    : "h-0 overflow-hidden"
            } `}
        >
            {submenus.map((submenu, index) => (
                <li key={index}>
                    <NavLink
                        to={submenu.to}
                        className={(navData) => {
                            return navData.isActive
                                ? ` flex items-center h-[50px] mb-1 pr-5 font-bold rounded-l-xl relative z-10 bg-btnPrimaryColor text-white dark:text-warningColor`
                                : "flex items-center text-primaryColor relative h-[50px] mb-1 pr-5 rounded-l-xl transition-all duration-200 hover:text-white hover:bg-btnPrimaryColor dark:text-primaryColor ";
                        }}
                    >
                        <i className={`icon-${submenu.icon} text-xl ml-3`}></i>
                        <div className="hidden xl:flex items-center w-full justify-between text-sm">
                            {submenu.title}
                            <div className="ml-5 z-10">{submenu.iconTwo}</div>
                        </div>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};
