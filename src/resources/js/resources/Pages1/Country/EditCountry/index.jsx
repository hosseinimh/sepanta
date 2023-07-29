import React from "react";

import {
    InputTextColumn,
    FormPage,
    InputRow,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const EditCountry = () => {
    const pageUtils = new PageUtils();

    return (
        <FormPage pageUtils={pageUtils}>
            <InputRow>
                <InputTextColumn field="country" textAlign="right" />
            </InputRow>
        </FormPage>
    );
};

export default EditCountry;