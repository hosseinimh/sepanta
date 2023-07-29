import React from "react";

import {
  InputTextColumn,
  FormPage,
  InputCheckboxColumn,
  InputCheckboxContainer,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const AddCampaign = () => {
  const pageUtils = new PageUtils();

  return (
    <FormPage pageUtils={pageUtils}>
      <InputTextColumn field="title" />
      <InputCheckboxContainer>
        <InputCheckboxColumn field="isActive" checked={true} />
      </InputCheckboxContainer>
    </FormPage>
  );
};

export default AddCampaign;
