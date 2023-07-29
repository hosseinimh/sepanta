import React from "react";

import {
  InputTextColumn,
  FormPage,
  InputCheckboxColumn,
  InputCheckboxContainer,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const EditCampaign = () => {
  const pageUtils = new PageUtils();

  return (
    <FormPage pageUtils={pageUtils}>
      <InputTextColumn field="title" showLabel />
      <InputCheckboxContainer>
        <InputCheckboxColumn field="isActive" checked={true} />
      </InputCheckboxContainer>
    </FormPage>
  );
};

export default EditCampaign;
