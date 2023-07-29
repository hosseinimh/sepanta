import React from "react";
import { useFormik } from "formik";
import FormikForm from "../../../common/FormikForm";
import * as Yup from "yup";
import FormikControl from "../../../common/FormikControl";
import { addTankPage } from "../../../constants/strings/fa";
import { Tank } from "../../../http/entities/Tank";

const AddTanks = () => {
    const tank = new Tank();

    const initialValues = {
        name: "",
        family: "",
        nationalCode: "",
        mobile: "",
        tankNum: "",
    };
    const validationSchema = Yup.object({
        name: Yup.string(),
        family: Yup.string(),
        tankNum: Yup.string(),
    });

    const onSubmit = async (values) => {
        const { name, family, nationalCode, mobile, tankNum } = values;
        const result = await tank.storeTank(
            name,
            family,
            nationalCode,
            mobile,
            tankNum
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
                pageString={addTankPage}
            />
            <FormikControl
                control="input"
                name="family"
                formik={formik}
                pageString={addTankPage}
            />
            <FormikControl
                control="input"
                name="nationalCode"
                formik={formik}
                pageString={addTankPage}
                type="number"
            />
            <FormikControl
                control="input"
                name="mobile"
                formik={formik}
                pageString={addTankPage}
                type="number"
            />
            <FormikControl
                control="input"
                name="tankNum"
                formik={formik}
                pageString={addTankPage}
                type="number"
            />
        </FormikForm>
    );
};

export default AddTanks;
