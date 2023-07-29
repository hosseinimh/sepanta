import React from "react";

import { InputTextColumn, FormPage, InputRow } from "../../../components";
import { PageUtils } from "./PageUtils";

const EditChallenge = () => {
  const pageUtils = new PageUtils();

  return (
    <FormPage pageUtils={pageUtils}>
      <InputRow>
        <InputTextColumn
          field="accountNo"
          textAlign="left"
          type="number"
          fullRow={false}
          showLabel
        />
        <InputTextColumn
          field="password"
          textAlign="left"
          fullRow={false}
          showLabel
        />
        <InputTextColumn
          field="investorPassword"
          textAlign="left"
          fullRow={false}
          showLabel
        />
      </InputRow>
      <InputTextColumn field="metaApiToken" textAlign="left" showLabel />
      <InputTextColumn field="metaApiAccountId" textAlign="left" showLabel />
    </FormPage>
  );
};

export default EditChallenge;
