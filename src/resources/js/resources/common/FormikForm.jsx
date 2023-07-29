import React from 'react';
import SubmitButton from "./Input/SubmitButton";

const FormikForm = ({
  children,
  onSubmit,
  customStyle = "",
  customStyleBtn = "",
  customStyleForm = "",
}) => {
  return (
    <div
      className={`${customStyle} bg-white rounded-xl shadow-lg px-10 py-4 mx-3`}
    >
      <form
        onSubmit={onSubmit}
        className={`${customStyleForm} flex flex-wrap justify-between `}
      >
        {children}
        <SubmitButton disabled="" customStyleBtn={customStyleBtn} />
      </form>
    </div>
  );
};

export default FormikForm;
