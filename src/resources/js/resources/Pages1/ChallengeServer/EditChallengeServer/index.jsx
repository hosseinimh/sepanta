import React from "react";

import {
  InputTextColumn,
  FormPage,
  InputCheckboxColumn,
  InputCheckboxContainer,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const EditChallengeServer = () => {
  const pageUtils = new PageUtils();

  return (
    <FormPage pageUtils={pageUtils}>
      <InputTextColumn field="name" textAlign="left" showLabel />
      <InputTextColumn field="title" showLabel />
      <InputCheckboxContainer>
        <InputCheckboxColumn field="free" checked={true} />
      </InputCheckboxContainer>
      <InputCheckboxContainer>
        <InputCheckboxColumn field="real" checked={true} />
      </InputCheckboxContainer>
    </FormPage>
  );
};

export default EditChallengeServer;
