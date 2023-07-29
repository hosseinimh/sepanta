import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  InputRow,
  InputTextColumn,
  NotAuthPageLayout,
} from "../../../components";
import { PageUtils } from "./PageUtils";
import { useLocale } from "../../../../hooks";
import { BASE_PATH } from "../../../../constants";

const Signup = () => {
  const layoutState = useSelector((state) => state.layoutReducer);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const pageUtils = new PageUtils();
  const { signupPage: strings } = useLocale();

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

  useEffect(() => {
    const element = document.querySelector("#confirmPassword");
    if (!element) {
      return;
    }
    if (showConfirmPass) {
      element.setAttribute("type", "text");
    } else {
      element.setAttribute("type", "password");
    }
  }, [showConfirmPass]);

  return (
    <NotAuthPageLayout pageUtils={pageUtils}>
      <InputTextColumn
        field="username"
        textAlign="left"
        showLabel
        icon={"icon-frame-14"}
      />
      <InputRow>
        <InputTextColumn
          field="password"
          type="password"
          textAlign="left"
          showLabel
          icon={`icon-eye3 icon-clickable${showPass ? " show" : ""}`}
          iconClick={() => setShowPass(!showPass)}
        />
        <InputTextColumn
          field="confirmPassword"
          type="password"
          textAlign="left"
          showLabel
          icon={`icon-eye3 icon-clickable${showConfirmPass ? " show" : ""}`}
          iconClick={() => setShowConfirmPass(!showConfirmPass)}
        />
      </InputRow>
      <InputTextColumn
        field="email"
        textAlign="left"
        showLabel
        icon={"icon-sms4"}
      />
      <InputRow>
        <InputTextColumn field="name" showLabel icon={"icon-personalcard4"} />
        <InputTextColumn field="family" showLabel icon={"icon-personalcard4"} />
      </InputRow>
      <button
        className="btn btn-primary mt-30 px-30"
        onClick={pageUtils.useForm.handleSubmit(pageUtils.onSubmit)}
        type="button"
        title={strings.submit}
        disabled={layoutState?.loading}
      >
        {strings.submit}
      </button>
      <div className="line-gr m-td-30"></div>
      <div className="text pd-30">
        {strings.haveAccount}
        <Link className="dark-warning mx-5" to={`${BASE_PATH}/users/login`}>
          {strings.login}
        </Link>
      </div>
    </NotAuthPageLayout>
  );
};

export default Signup;
