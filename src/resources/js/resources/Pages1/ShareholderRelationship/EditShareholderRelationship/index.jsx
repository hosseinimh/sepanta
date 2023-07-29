import React from "react";

import {
    InputTextColumn,
    FormPage,
    InputRow,
    InputSelectColumn,
    InputDatePickerColumn,
    InputTextAreaColumn,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const EditShareholderRelationship = () => {
    const pageUtils = new PageUtils();

    return (
        <FormPage pageUtils={pageUtils}>
            <InputRow>
                <InputTextColumn field="name" textAlign="right" />
                <InputTextColumn field="family" textAlign="right" />
                <InputTextColumn
                    field="nationalCode"
                    textAlign="right"
                    type="number"
                />
            </InputRow>
            <InputRow>
                <InputTextColumn
                    field="identityNo"
                    textAlign="right"
                    type="number"
                />
                <InputDatePickerColumn field="birthDate" />
            </InputRow>
            <InputRow>
                <InputSelectColumn field="gender" />
                <InputSelectColumn field="shareholderRelationship" />
            </InputRow>
            <InputRow>
                <InputTextAreaColumn field="description" />
            </InputRow>
        </FormPage>
    );
};

export default EditShareholderRelationship;
