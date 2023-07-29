import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import InputRow from "./InputRow";

const InputDatePickerColumn = ({
  field,
  value = null,
  useForm,
  strings = null,
  showLabel = false,
  fullRow = true,
}) => {
  const layoutState = useSelector((state) => state.layoutReducer);
  const pageState = useSelector((state) => state.pageReducer);
  const messageState = useSelector((state) => state.messageReducer);
  const [date, setDate] = useState();
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
    if (form && value) {
      form?.setValue(field, value);
      setDate(value);
    }
  }, [form]);

  useEffect(() => {
    if (label && !value) {
      document.querySelector(`#${field}-button`).innerText = label;
      setDate(label);
    }
  }, [label]);

  useEffect(() => {
    if (form && date) {
      form?.setValue(field, date?.toString());
    }
  }, [date]);

  const renderItem = () => (
    <>
      {showLabel && <div className="input-info">{label}</div>}
      <div
        className={`input-text input-bg input-border ${
          messageState?.messageField === field ? "error mb-40" : "mb-30"
        }`}
      >
        {form && (
          <>
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              render={(value, openCalendar) => {
                return (
                  <button
                    id={`${field}-button`}
                    className="rmdp-button"
                    onClick={openCalendar}
                  >
                    {value}
                  </button>
                );
              }}
              calendarPosition="bottom-right"
              onChange={(e) => {
                setDate(e?.toString());
              }}
              id={field}
              disabled={layoutState?.loading}
            />
            {messageState?.messageField === field && (
              <span className="error">{messageState?.message}</span>
            )}
            <div className="icon">
              <i className="icon-calendar-1"></i>
            </div>
          </>
        )}
      </div>
    </>
  );

  if (fullRow) {
    return <InputRow>{renderItem()}</InputRow>;
  }
  return renderItem();
};

export default InputDatePickerColumn;
