import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { NotAuthPageLayout, InputTextColumn } from "../../../components";
import { PageUtils } from "./PageUtils";
import { useLocale } from "../../../../hooks";
import { BASE_PATH } from "../../../../constants";

const ForgotPassword = () => {
  const layoutState = useSelector((state) => state.layoutReducer);
  const pageUtils = new PageUtils();
  const { forgotPasswordPage: strings } = useLocale();

  return (
    <NotAuthPageLayout pageUtils={pageUtils}>
      <InputTextColumn
        field="email"
        type="email"
        showLabel={false}
        textAlign="left"
        icon={"icon-sms4"}
      />
      <button
        className="btn btn-primary"
        onClick={pageUtils.useForm.handleSubmit(pageUtils.onSubmit)}
        type="button"
        title={strings.submit}
        disabled={layoutState?.loading}
      >
        {strings.submit}
      </button>
      <div className="line-gr m-td-30"></div>
      <div className="pd-30">
        <Link className="dark-warning mx-5" to={`${BASE_PATH}/users/login`}>
          {strings.login}
        </Link>
      </div>
    </NotAuthPageLayout>
  );
};

export default ForgotPassword;
