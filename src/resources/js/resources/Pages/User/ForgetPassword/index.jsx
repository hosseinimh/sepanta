import React from "react";
import { useFormik } from "formik";
import FormikControl from "../../../common/FormikControl";
import FormikForm from "../../../common/FormikForm";
import { forgotPasswordPage, general } from "../../../constants/strings/fa";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { User } from "../../../http/entities/User";

const ForgetPassword = () => {
  const user = new User();

  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string(),
  });

  const onSubmit = async ({ email }) => {
    console.log(email);
    const result = await user.forgotPassword(email);

    if (result === null) {
      // show failure message
      return;
    }

    // show success message
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
            {forgotPasswordPage._title}
          </h2>
          <span className="text-xs">{forgotPasswordPage._subTitle}</span>
          <FormikForm
            onSubmit={formik.handleSubmit}
            customStyle="!bg-transparent shadow-none"
            customStyleBtn="bg-gradient-to-r from-[#3c3d5e] to-[#63647F]"
            customStyleForm="block"
          >
            <FormikControl
              control="input"
              name="email"
              formik={formik}
              pageString={forgotPasswordPage}
              customStyleInput="!bg-[#F3F1FF] rounded-xl"
              custom="lg:w-full "
            />
          </FormikForm>
          <div className="grid items-center gap-x-3 grid-cols-[1fr_1fr_1fr] text-sm my-4 before:content-[''] before:block before:h-[1px] before:bg-[#F3F1FF] after:content-[''] after:block after:h-[1px] after:bg-[#F3F1FF] ">
            <div>
              <Link className=" font-light" to="/login">
                {general.fallbackReturnHome}
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

export default ForgetPassword;
