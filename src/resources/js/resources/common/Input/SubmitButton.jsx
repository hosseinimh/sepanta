import React from 'react';
import { general } from "../../constants/strings/fa";

const SubmitButton = ({
  disabled = "",
  submit = `${general.submit}`,
  customStyleBtn = "",
}) => {
  return (
    <button
      type="submit"
      // disabled={!formik.isValid}
      disabled={disabled}
      className={`${customStyleBtn} w-full bg-btnPrimaryColor rounded-xl py-3 mx-auto px-5 mt-3 text-white`}
    >
      {/* {general.submit} */}
      {submit}
    </button>
  );
};

export default SubmitButton;
