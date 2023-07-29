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
import { useLocale } from "../../../../hooks";

const AddShareholderRelationship = () => {
    const pageUtils = new PageUtils();
    const { addShareholderRelationshipsPage: strings } = useLocale();

    return (
        <FormPage pageUtils={pageUtils}>
            <InputRow>
                <InputTextColumn field="name" textAlign="right" />
                <InputTextColumn field="family" textAlign="right" />
                <InputTextColumn field="nationalCode" />
            </InputRow>
            <h4>{strings._title}</h4>
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
                <InputTextColumn
                    field="mobile"
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

export default AddShareholderRelationship;
