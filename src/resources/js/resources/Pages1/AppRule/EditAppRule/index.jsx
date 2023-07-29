import React from "react";

import {
  InputTextColumn,
  FormPage,
  InputTextAreaColumn,
} from "../../../components";
import { PageUtils } from "./PageUtils";

const EditAppRule = () => {
  const pageUtils = new PageUtils();

  return (
    <FormPage pageUtils={pageUtils}>
      <InputTextColumn field="title" showLabel />
      <InputTextAreaColumn field="body" showLabel />
    </FormPage>
  );
};

export default EditAppRule;
