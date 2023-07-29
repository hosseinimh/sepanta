import React, { useState } from "react";
import profile from "../../../images/profile.jpeg";
import Modal from "../../../common/Modal";
import { Link, useNavigate } from "react-router-dom";
import { header } from "../../../constants/strings/fa";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../../http/entities/User";
import { userLogOut } from "../../../state/user/userAction";
const Header = () => {
    const [modal, setModal] = useState(false);
    const user = new User();
    const userState = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        if (userState.isAuthenticated) {
            user.logOut();
            dispatch(userLogOut());
            navigate("/login");
        }
    };

    return (
        <div className="h-16 my-3 ml-5">
            <div className="flex items-center justify-between h-full">
                <h1>داشبورد من</h1>
                <div className="flex ">
                    <img
                        src={profile}
                        alt=""
                        className="h-7 w-7 cursor-pointer"
                        onClick={() => setModal(!modal)}
                    />
                    {modal && (
                        <Modal modal={modal} setModal={setModal}>
                            <div>
                                <i className="icon-user4 text-xl ml-3 "></i>
                                ایمان آخوندی
                            </div>
                            <Link to="">
                                <button
                                    className="cursor-pointer my-3 flex items-center"
                                    onClick={() => setModal(!modal)}
                                >
                                    <i className="icon-user-edit4 text-xl ml-3 "></i>
                                    <span>{header.editProfile}</span>
                                </button>
                            </Link>
                            <hr />
                            <div
                                onClick={logoutHandler}
                                className="cursor-pointer my-3 text-red-500 flex items-center"
                            >
                                <i className="icon-logout4 text-xl ml-3 "></i>
                                <span>{header.logout}</span>
                            </div>
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
