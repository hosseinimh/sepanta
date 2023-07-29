import React from "react";

import {
    InputTextColumn,
    FormPage,
    InputRow,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const AddBank = () => {
    const pageUtils = new PageUtils();

    return (
        <FormPage pageUtils={pageUtils}>
            <InputRow>
                <InputTextColumn field="bank" textAlign="right" />
            </InputRow>
        </FormPage>
    );
};

export default AddBank;
