import React, { useEffect, useState } from "react";

const Input = ({
    name,
    type = "text",
    formik,
    strings = null,
    showLabel = false,
    readOnly,
    custom = "",
    customStyleInput = "",
    pageString,
}) => {
    const [label, setLabel] = useState(
        strings && name in strings ? strings[name] : ""
    );
    const [placeholder, setPlaceholder] = useState(
        strings && `${name}Placeholder` in strings
            ? strings[`${name}Placeholder`]
            : ""
    );
    useEffect(() => {
        if (!strings) {
            setLabel(pageString && name in pageString ? pageString[name] : "");
            setPlaceholder(
                pageString && `${name}Placeholder` in pageString
                    ? pageString[`${name}Placeholder`]
                    : ""
            );
        }
    }, []);

    return (
        // <div className=" flex flex-col mt-2 w-full md:ml-5 md:w-[300px] lg:w-[250px] " >
        <div
            className={`${custom} flex flex-col mt-2 w-full lg:w-[300px] xl:w-[400px]`}
        >
            {showLabel && (
                <label
                    htmlFor={name}
                    className="text-primaryColor dark:text-primaryColorDark mb-1 text-sm"
                >
                    {label}
                </label>
            )}
            <input
                {...formik.getFieldProps(name)}
                id={name}
                name={name}
                type={type}
                readOnly={readOnly}
                placeholder={placeholder}
                className={`${customStyleInput} w-full block text-sm bg-transparent border-b-2 border-borderColor mb-1 px-4 py-3 placeholder:text-black/50 placeholder:text-xs dark:placeholder:text-white/20 focus:border-navBgColor focus:ring-primaryColor dark:focus:ring-primaryColorDark focus:ring-opacity-20 dark:focus:border-primaryColorDark focus:border-opacity-40 focus-visible:outline-0 dark:bg-mainBgColorDark dark:border-borderColorDark `}
            />
            {formik.touched[name] && formik.errors[name] && (
                <div className="text-red-500 text-xs font-semibold  ">
                    {formik.errors[name]}
                </div>
            )}
        </div>
    );
};

export default Input;
