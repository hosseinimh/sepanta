import React from "react";

import {
  InputTextColumn,
  FormPage,
  InputCheckboxColumn,
  InputCheckboxContainer,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const EditChallengePlatform = () => {
  const pageUtils = new PageUtils();

  return (
    <FormPage pageUtils={pageUtils}>
      <InputTextColumn field="value" textAlign="left" showLabel />
      <InputCheckboxContainer>
        <InputCheckboxColumn field="free" checked={true} />
      </InputCheckboxContainer>
      <InputCheckboxContainer>
        <InputCheckboxColumn field="real" checked={true} />
      </InputCheckboxContainer>
    </FormPage>
  );
};

export default EditChallengePlatform;
