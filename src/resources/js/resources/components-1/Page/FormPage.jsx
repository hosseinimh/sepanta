import React from "react";
import { FormCard, FormPageLayout } from "../";

const FormPage = ({ children, pageUtils, submitEnabled = true }) => {
  return (
    <FormPageLayout pageUtils={pageUtils}>
      <FormCard pageUtils={pageUtils} submitEnabled={submitEnabled}>
        {children}
      </FormCard>
    </FormPageLayout>
  );
};

export default FormPage;
