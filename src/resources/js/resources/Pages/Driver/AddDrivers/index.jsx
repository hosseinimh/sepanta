import React from "react";
import { useFormik } from "formik";
import FormikForm from "../../../common/FormikForm";
import * as Yup from "yup";
import FormikControl from "../../../common/FormikControl";
import { addDriverPage } from "../../../constants/strings/fa";
import { Driver } from "../../../http/entities/Driver";

const AddDrivers = () => {
    const driver = new Driver();
    const initialValues = {
        name: "",
        family: "",
        nationalCode: "",
        mobile: "",
        driverLicenseNum: "",
        driverSmartCard: "",
    };
    const validationSchema = Yup.object({
        name: Yup.string(),
        family: Yup.string(),
        nationalCode: Yup.string(),
        mobile: Yup.string(),
        driverLicenseNum: Yup.string(),
        driverSmartCard: Yup.string(),
    });

    const onSubmit = async (values) => {
        console.log("Form data", values);
        const {
            name,
            family,
            nationalCode,
            mobile,
            driverLicenseNum,
            driverSmartCard,
        } = values;
        const result = await driver.storeDriver(
            name,
            family,
            nationalCode,
            mobile,
            driverLicenseNum,
            driverSmartCard
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
                name="name"
                formik={formik}
                pageString={addDriverPage}
            />
            <FormikControl
                control="input"
                name="family"
                formik={formik}
                pageString={addDriverPage}
            />
            <FormikControl
                control="input"
                name="nationalCode"
                formik={formik}
                pageString={addDriverPage}
                type="number"
            />
            <FormikControl
                control="input"
                name="mobile"
                formik={formik}
                pageString={addDriverPage}
                type="number"
            />
            <FormikControl
                control="input"
                name="driverLicenseNum"
                formik={formik}
                pageString={addDriverPage}
                type="number"
            />
            <FormikControl
                control="input"
                name="driverSmartCard"
                formik={formik}
                pageString={addDriverPage}
                type="number"
            />
        </FormikForm>
    );
};

export default AddDrivers;
