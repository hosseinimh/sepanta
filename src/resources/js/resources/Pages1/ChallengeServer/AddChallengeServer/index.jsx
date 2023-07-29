import React from "react";

import {
  InputTextColumn,
  FormPage,
  InputCheckboxColumn,
  InputCheckboxContainer,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const AddChallengeServer = () => {
  const pageUtils = new PageUtils();

  return (
    <FormPage pageUtils={pageUtils}>
      <InputTextColumn field="name" textAlign="left" />
      <InputTextColumn field="title" />
      <InputCheckboxContainer>
        <InputCheckboxColumn field="free" checked={true} />
      </InputCheckboxContainer>
      <InputCheckboxContainer>
        <InputCheckboxColumn field="real" checked={true} />
      </InputCheckboxContainer>
    </FormPage>
  );
};

export default AddChallengeServer;
