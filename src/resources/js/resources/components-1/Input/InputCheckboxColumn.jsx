import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const InputCheckboxColumn = ({ field, useForm, strings, checked }) => {
  const layoutState = useSelector((state) => state.layoutReducer);
  const pageState = useSelector((state) => state.pageReducer);
  const [label, setLabel] = useState(
    strings && field in strings ? strings[field] : ""
  );
  const [form, setForm] = useState(useForm);

  useEffect(() => {
    if (!strings) {
      setLabel(
        pageState?.pageUtils?.strings && field in pageState.pageUtils.strings
          ? pageState?.pageUtils?.strings[field]
          : ""
      );
    }

    if (!useForm) {
      setForm(pageState?.pageUtils?.useForm);
    }
  }, [pageState]);

  useEffect(() => {
    if (form && checked) {
      form?.setValue(field, checked);
    }
  }, [form]);

  return (
    <>
      <input
        {...form?.register(field)}
        id={field}
        type="checkbox"
        disabled={layoutState?.loading}
      />
      <label htmlFor={field}>{label}</label>
    </>
  );
};

export default InputCheckboxColumn;
