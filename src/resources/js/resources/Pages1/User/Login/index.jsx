import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { InputTextColumn, NotAuthPageLayout } from "../../../components";
import { PageUtils } from "./PageUtils";
import { useLocale } from "../../../../hooks";
import { BASE_PATH } from "../../../../constants";

const Login = () => {
  const layoutState = useSelector((state) => state.layoutReducer);
  const [showPass, setShowPass] = useState(false);
  const pageUtils = new PageUtils();
  const { loginUserPage: strings } = useLocale();

  useEffect(() => {
    const element = document.querySelector("#password");
    if (!element) {
      return;
    }
    if (showPass) {
      element.setAttribute("type", "text");
    } else {
      element.setAttribute("type", "password");
    }
  }, [showPass]);

  return (
    <NotAuthPageLayout pageUtils={pageUtils}>
      <InputTextColumn
        field="username"
        showLabel={false}
        textAlign="left"
        icon={"icon-frame-14"}
        inputContainerClassName="pd-dir-10"
      />
      <InputTextColumn
        field="password"
        type="password"
        showLabel={false}
        textAlign="left"
        icon={`icon-eye3 icon-clickable${showPass ? " show" : ""}`}
        iconClick={() => setShowPass(!showPass)}
        inputContainerClassName="pd-dir-10"
      />
      <div className="d-flex-column align-center">
        <button
          className="btn btn-primary mb-10"
          onClick={pageUtils.useForm.handleSubmit(pageUtils.onSubmit)}
          type="button"
          title={strings.submit}
          disabled={layoutState?.loading}
        >
          {strings.submit}
        </button>
        <button
          className="btn text"
          style={{ backgroundColor: "#e94235" }}
          onClick={pageUtils.useForm.handleSubmit(pageUtils.onSubmit)}
          type="button"
          title={strings.loginByGoogle}
          disabled={layoutState?.loading}
        >
          {strings.loginByGoogle}
        </button>
        <div className="mt-20 mb-10 text">
          {strings.forgot}
          <Link to={`${BASE_PATH}/users/forgot`} className="dark-warning mx-5">
            {strings.recoverPassword}
          </Link>
        </div>
      </div>
      <div className="line-gr m-td-30"></div>
      <div className="text pd-t-30 pd-b-20">
        {strings.notSignedup}
        <Link className="dark-warning mx-5" to={`${BASE_PATH}/users/signup`}>
          {strings.signup}
        </Link>
      </div>
    </NotAuthPageLayout>
  );
};

export default Login;
