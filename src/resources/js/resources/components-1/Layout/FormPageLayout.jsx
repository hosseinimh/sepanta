import React from "react";

import { AlertState } from "../../components";
import BasePageLayout from "./BasePageLayout";

const FormPageLayout = ({ children, pageUtils }) => {
  return (
    <BasePageLayout pageUtils={pageUtils}>
      <AlertState />
      <div className="section d-flex-wrap fix-mr15">
        {children}</div>
    </BasePageLayout>
  );
};

export default FormPageLayout;
