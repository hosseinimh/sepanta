import React from "react";
import { useFormik } from "formik";
import FormikForm from "../../../common/FormikForm";
import * as Yup from "yup";
import FormikControl from "../../../common/FormikControl";
import { addCarPage } from "../../../constants/strings/fa";
import { Car } from "../../../http/entities/Car";

const AddCars = () => {
    const car = new Car();

    let initialValues = {
        name: "",
        family: "",
        nationalCode: "",
        mobile: "",
        carLicensePlateNum: "",
        carTransitLicensePlateNum: "",
        CLPN1: "",
        CLPN2: "",
        CLPN3: "",
        CLPN4: "",
        CTLPN1: "",
        CTLPN2: "",
        CTLPN3: "",
        CTLPN4: "",
    };
    const validationSchema = Yup.object({
        name: Yup.string(),
        family: Yup.string(),
        carLicensePlateNum: Yup.string(),
        carTransitLicensePlateNum: Yup.string(),
    });

    const onSubmit = async (values) => {
        const {
            name,
            family,
            nationalCode,
            mobile,
            carLicensePlateNum,
            carTransitLicensePlateNum,
            CLPN1,
            CLPN2,
            CLPN3,
            CLPN4,
            CTLPN1,
            CTLPN2,
            CTLPN3,
            CTLPN4,
        } = values;
        values.carLicensePlateNum = `${CLPN1}-${CLPN2}-${CLPN3}-${CLPN4}`;
        values.carTransitLicensePlateNum = `${CTLPN1}-${CTLPN2}-${CTLPN3}-${CTLPN4}`;
        console.log("Form data", values);
        console.log(
            "Form ",
            name,
            family,
            nationalCode,
            mobile,
            carLicensePlateNum,
            carTransitLicensePlateNum
        );
        const result = await car.storeCar({
            name,
            family,
            nationalCode,
            mobile,
            carLicensePlateNum,
            carTransitLicensePlateNum,
        });
        console.log("result", result);
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
                pageString={addCarPage}
            />
            <FormikControl
                control="input"
                name="family"
                formik={formik}
                pageString={addCarPage}
            />
            <FormikControl
                control="input"
                name="nationalCode"
                formik={formik}
                pageString={addCarPage}
                type="number"
            />
            <FormikControl
                control="input"
                name="mobile"
                formik={formik}
                pageString={addCarPage}
                type="number"
            />
            <span className="block w-full text-xs mt-5 text-black/50">
                {addCarPage.carLicensePlateNum}
            </span>
            <div className="flex gap-x-2">
                <FormikControl
                    control="input"
                    name="CLPN4"
                    formik={formik}
                    pageString={addCarPage}
                    custom="!w-[50px] md:!w-[100px]"
                    //   type="number"
                />
                <FormikControl
                    control="input"
                    name="CLPN3"
                    formik={formik}
                    pageString={addCarPage}
                    //   type="number"
                    custom="!w-[50px] md:!w-[100px]"
                />
                <FormikControl
                    control="input"
                    name="CLPN2"
                    formik={formik}
                    custom="!w-[50px]"
                    pageString={addCarPage}
                />
                <FormikControl
                    control="input"
                    name="CLPN1"
                    formik={formik}
                    pageString={addCarPage}
                    //   type="number"
                    custom="!w-[50px] md:!w-[100px]"
                />
            </div>
            <span className="block w-full text-xs mt-5 text-black/50">
                {addCarPage.carTransitLicensePlateNum}
            </span>
            <div className="flex gap-x-2">
                <FormikControl
                    control="input"
                    name="CTLPN4"
                    formik={formik}
                    pageString={addCarPage}
                    custom="!w-[50px] md:!w-[100px]"
                    //   type="number"
                />
                <FormikControl
                    control="input"
                    name="CTLPN3"
                    formik={formik}
                    pageString={addCarPage}
                    //   type="number"
                    custom="!w-[50px] md:!w-[100px]"
                />
                <FormikControl
                    control="input"
                    name="CTLPN2"
                    formik={formik}
                    custom="!w-[50px]"
                    pageString={addCarPage}
                />
                <FormikControl
                    control="input"
                    name="CTLPN1"
                    formik={formik}
                    pageString={addCarPage}
                    //   type="number"
                    custom="!w-[50px] md:!w-[100px]"
                />
            </div>
        </FormikForm>
    );
};

export default AddCars;
