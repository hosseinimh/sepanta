import React from "react";

import { InputTextColumn, FormPage } from "../../../../components";
import { PageUtils } from "./PageUtils";

const BaseChangePasswordUser = ({ userId }) => {
    const pageUtils = new PageUtils(userId);

    return (
        <FormPage pageUtils={pageUtils}>
            <InputTextColumn
                field="newPassword"
                type="password"
                textAlign="left"
            />
            <InputTextColumn
                field="confirmPassword"
                type="password"
                textAlign="left"
            />
        </FormPage>
    );
};

export default BaseChangePasswordUser;
