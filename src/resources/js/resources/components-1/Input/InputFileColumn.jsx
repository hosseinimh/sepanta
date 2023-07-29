import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InputRow from "./InputRow";

const InputFileColumn = ({
  field,
  accept = ".jpg, .jpeg, .png, .pdf, .doc, .docx",
  onChangeFile,
  useForm,
  strings,
  fullRow = true,
}) => {
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

  const renderItem = () => (
    <label className="input-file">
      <input
        type="file"
        className="file-input"
        {...form?.register(`${field}`)}
        id={field}
        disabled={layoutState?.loading}
        accept={accept}
        onChange={(e) => onChangeFile(e)}
      />
      <div className="filenameinput overhide">{label}</div>
      <i className="icon-import"></i>
    </label>
  );

  if (fullRow) {
    return <InputRow>{renderItem()}</InputRow>;
  }
  return renderItem();
};

export default InputFileColumn;
