import React from "react";

import {
  InputTextColumn,
  FormPage,
  InputTextAreaColumn,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const AddAppRule = () => {
  const pageUtils = new PageUtils();

  return (
    <FormPage pageUtils={pageUtils}>
      <InputTextColumn field="title" />
      <InputTextAreaColumn field="body" />
    </FormPage>
  );
};

export default AddAppRule;
