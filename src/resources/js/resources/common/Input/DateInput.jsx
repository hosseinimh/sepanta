import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DateInput = ({
    name,
    value,
    onChange,
    label,
    formik,
    placeholder = "",
}) => {
    return (
        <div className="flex flex-col mt-2 w-full md:w-[300px] lg:w-[250px]">
            <label className="intro-x text-primaryColor mb-1 text-sm">
                {label}
            </label>
            <DatePicker
                calendar={persian}
                locale={persian_fa}
                value={value}
                format="YYYY/MM/DD"
                name={name}
                onChange={onChange}
                inputClass="custom-input"
                placeholder={placeholder}
            />
            {formik.errors[name] && formik.touched[name] && (
                <div className="text-red-500 text-xs font-semibold col-start-2 col-end-3 ">
                    {formik.errors[name]}
                </div>
            )}
        </div>
    );
};

export default DateInput;
