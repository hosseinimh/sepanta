import React from "react";
const TextAreaInput = ({
    label,
    name,
    formik,
    placeholder,
    customStyleInput,
}) => {
    return (
        <div className="flex flex-col justify-center mt-2 w-full md:w-full">
            <label className="intro-x text-primaryColor mb-1 text-sm">
                {label}
            </label>
            <textarea
                name={name}
                className={`${customStyleInput} w-full bg-mainBgColor block text-sm shadow-sm border border-borderColor rounded-[40px] mb-1 px-4 py-3 placeholder:text-white/20 placeholder:text-xs focus:ring-4 focus:ring-primaryColor focus:ring-opacity-20 focus:border-primaryColor focus:border-opacity-40 focus-visible:outline-0 intro-x`}
                placeholder={placeholder}
                {...formik.getFieldProps({ name })}
            ></textarea>
        </div>
    );
};

export default TextAreaInput;
