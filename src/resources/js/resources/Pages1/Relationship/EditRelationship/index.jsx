import React from "react";

import {
    InputTextColumn,
    FormPage,
    InputRow,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const EditRelationship = () => {
    const pageUtils = new PageUtils();

    return (
        <FormPage pageUtils={pageUtils}>
            <InputRow>
                <InputTextColumn field="relationship" textAlign="right" />
            </InputRow>
        </FormPage>
    );
};

export default EditRelationship;