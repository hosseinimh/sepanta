import React from "react";

import {
    InputRadioColumn,
    InputTextColumn,
    FormPage,
    InputCheckboxColumn,
    InputCheckboxContainer,
    InputRadioContainer,
} from "../../../components";
import { PageUtils } from "./PageUtils";
import { useLocale } from "../../../../hooks";


const AddUser = () => {
    const { addUserPage: strings } = useLocale();
    const pageUtils = new PageUtils();

    return (
        <FormPage pageUtils={pageUtils}>
            <InputTextColumn
                field="username"
                textAlign="left"
                showLabel
                inputClassName="autofill"
            
            />
            <InputTextColumn
                field="password"
                type="password"
                textAlign="left"
                showLabel
                inputClassName="autofill"
            />
            <InputTextColumn
                field="confirmPassword"
                type="password"
                textAlign="left"
                showLabel
                inputClassName="autofill"
            />
            <InputTextColumn
                field="email"
                textAlign="left"
                inputClassName="autofill"
            />
            <InputTextColumn field="name" inputClassName="autofill" />
            <InputTextColumn field="family" inputClassName="autofill" />
            <InputCheckboxContainer>
                <InputCheckboxColumn field="isActive" checked={true} />
            </InputCheckboxContainer>
            <InputRadioContainer label={strings.type}>
                <InputRadioColumn
                    field="administrator"
                    name="type"
                    checked={true}
                />
                <InputRadioColumn field="user" name="type" />
            </InputRadioContainer>
        </FormPage>
    );
};

export default AddUser;
