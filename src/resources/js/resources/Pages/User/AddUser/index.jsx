import React from 'react';
import { useFormik } from "formik";
import FormikForm from "../../../common/FormikForm";
import * as Yup from "yup";
import FormikControl from "../../../common/FormikControl";
import { addUserPage } from "../../../constants/strings/fa";
import { User } from "../../../http/entities/User";

const AddUser = () => {
  const user = new User();
  const initialValues = {
    userName: "",
    name: "",
    family: "",
    nationalCode: "",
    mobile: "",
  };
  const validationSchema = Yup.object({
    userName: Yup.string(),
    name: Yup.string(),
    family: Yup.string(),
    nationalCode: Yup.string(),
    mobile: Yup.string(),
    email: Yup.string(),
    password: Yup.string(),
    confirmPassword: Yup.string(),
  });

  const onSubmit = async (values) => {
    console.log("Form data", values);
    const { userName, name, family, nationalCode, mobile } = values;
    const result = await user.storeUser(
      userName,
      name,
      family,
      nationalCode,
      mobile
    );

    if (result === null) {
      //show message failure
      return;
    }
    //show message success
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <FormikForm onSubmit={formik.handleSubmit}>
      <FormikControl
        control="input"
        name="userName"
        formik={formik}
        pageString={addUserPage}
      />
      <FormikControl
        control="input"
        name="name"
        formik={formik}
        pageString={addUserPage}
      />
      <FormikControl
        control="input"
        name="family"
        formik={formik}
        pageString={addUserPage}
      />
      <FormikControl
        control="input"
        name="nationalCode"
        formik={formik}
        pageString={addUserPage}
        type="number"
      />
      <FormikControl
        control="input"
        name="mobile"
        formik={formik}
        pageString={addUserPage}
        type="number"
      />
      <FormikControl
        control="input"
        name="email"
        formik={formik}
        pageString={addUserPage}
        type="email"
      />
      <FormikControl
        control="input"
        name="password"
        formik={formik}
        pageString={addUserPage}
        type="password"
      />
      <FormikControl
        control="input"
        name="confirmPassword"
        formik={formik}
        pageString={addUserPage}
        type="password"
      />
    </FormikForm>
  );
};

export default AddUser;
