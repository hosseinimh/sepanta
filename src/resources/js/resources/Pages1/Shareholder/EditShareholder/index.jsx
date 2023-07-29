import React from "react";

import {
    InputTextColumn,
    FormPage,
    InputRow,
    InputDatePickerColumn,
    InputTextAreaColumn,
    InputSelectColumn,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const EditShareholder = () => {
    const pageUtils = new PageUtils();

    return (
        <FormPage pageUtils={pageUtils}>
            <InputRow>
                <InputTextColumn field="name" textAlign="right" />
                <InputTextColumn field="family" textAlign="right" />
                <InputTextColumn field="fatherName" textAlign="right" />
            </InputRow>
            <InputRow>
                <InputTextColumn
                    field="nationalCode"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="identityNo"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn
                    field="postalCode"
                    textAlign="right"
                    type="number"
                />
            </InputRow>
            <InputRow>
                <InputSelectColumn
                    field="village"
                    textAlign="right"
                    type="number"
                />
                <InputSelectColumn
                    field="villageTwo"
                    textAlign="right"
                    type="number"
                />
                <InputSelectColumn
                    field="gender"
                    textAlign="right"
                    type="number"
                />
            </InputRow>
            <InputRow>
                <InputDatePickerColumn field="birthDate" />
                <InputDatePickerColumn field="registeryDate" />
            </InputRow>
            <InputRow>
                <InputTextColumn
                    field="mobile"
                    textAlign="right"
                    type="number"
                />
                <InputTextColumn field="tel" textAlign="right" type="number" />
            </InputRow>
            <InputRow>
                <InputTextAreaColumn
                    field="address"
                    textAlign="right"
                    type="number"
                />
            </InputRow>
            <InputRow>
                <InputTextAreaColumn
                    field="description"
                    textAlign="right"
                    type="number"
                />
            </InputRow>
        </FormPage>
    );
};

export default EditShareholder;
