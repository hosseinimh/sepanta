import React from "react";

import {
    InputTextColumn,
    FormPage,
    InputSelectColumn,
    InputRow,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const AddVillage = () => {
    const pageUtils = new PageUtils();

    return (
        <FormPage pageUtils={pageUtils}>
            <InputRow>
                <InputSelectColumn field="section" textAlign="right" />
                <InputTextColumn field="village" textAlign="right" />
            </InputRow>
        </FormPage>
    );
};

export default AddVillage;
