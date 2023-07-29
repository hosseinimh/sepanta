import React from "react";
import { useFormik } from "formik";
import { loginUserPage } from "../../../constants/strings/fa";
import * as Yup from "yup";
import FormikForm from "../../../common/FormikForm";
import FormikControl from "../../../common/FormikControl";
import { Link, useNavigate } from "react-router-dom";
import { fetchLoginAction } from "../../../state/user/userAction";
import { useDispatch, useSelector } from "react-redux";
import useQuery from "../../../hooks/useQuery";
import { useEffect } from "react";

const LoginUser = () => {
    const query = useQuery();
    const redirect = query.get("redirect") || "panel/dashboard";
    const navigate = useNavigate();
    const userState = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userState.isAuthenticated) {
            navigate(`/${redirect}`);
        }
    }, [redirect, userState]);

    const initialValues = {
        username: "",
        password: "",
    };
    const validationSchema = Yup.object({
        username: Yup.string(),
        password: Yup.string(),
    });

    const onSubmit = async ({ username, password }) => {
        dispatch(fetchLoginAction({ username, password }));
        if (userState.isAuthenticated) {
            navigate(`/${redirect}`);
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    return (
        <div className=" overflow-hidden">
            <div className="flex mx-auto ">
                <div className="flex-1 min-h-screen h-full flex flex-col items-center justify-center bg-white">
                    <h2 className="font-bold mb-3 text-2xl">
                        {loginUserPage._title}
                    </h2>
                    <span className="text-xs">{loginUserPage._subTitle}</span>
                    <FormikForm
                        onSubmit={formik.handleSubmit}
                        customStyle="!bg-transparent shadow-none"
                        customStyleBtn="bg-gradient-to-r from-[#3c3d5e] to-[#63647F] mt-7"
                        customStyleForm="!block"
                    >
                        <FormikControl
                            control="input"
                            name="username"
                            formik={formik}
                            pageString={loginUserPage}
                            customStyleInput="!bg-[#F3F1FF] rounded-xl"
                            custom="lg:w-full "
                        />
                        <FormikControl
                            control="input"
                            name="password"
                            formik={formik}
                            pageString={loginUserPage}
                            customStyleInput="!bg-[#F3F1FF] rounded-xl"
                            custom="lg:w-full "
                            type="password"
                        />
                    </FormikForm>
                    <div className="grid items-center gap-x-3 grid-cols-[1fr_1fr_1fr] text-sm my-4 before:content-[''] before:block before:h-[1px] before:bg-[#F3F1FF] after:content-[''] after:block after:h-[1px] after:bg-[#F3F1FF] ">
                        <div>
                            <Link className=" font-light" to="/forget-password">
                                {loginUserPage.forgot}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-1 bg-loginBg bg-no-repeat bg-cover">
                    <div className="bg-white/10 rounded-[50px] bg-loginWomen bg-no-repeat bg-cover w-96 h-96">
                        <p className="text-white text-right px-5 py-10 text-3xl font-bold ">
                            Very good <br />
                            works are <br />
                            waiting for <br />
                            you Login <br />
                            Now!!!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginUser;
