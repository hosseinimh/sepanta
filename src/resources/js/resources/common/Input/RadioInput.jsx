import React from "react";

const RadioInput = ({ radioOptions, formik, name,label }) => {
  return (
    <div className="flex flex-col justify-center mt-2 w-full md:ml-5 md:w-[250px]" >
     
      {radioOptions.map((item) => (
        <div key={item.value} className="flex col-start-2 col-span-3 ">
          <input
            type="radio"
            id={item.value}
            name={name}
            // {...formik.getFieldProps(name)}
            value={item.value}
            checked={formik.values[name] === item.value}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className="text-sm cursor-pointer shadow-sm border border-slate-200 rounded-md px-4 ml-1 py-3 placeholder:text-slate-400/90 placeholder:text-xs  focus:border-primaryOne focus:border-opacity-40 focus-visible:outline-0 intro-x "
          />
          <label htmlFor={item.value} className="cursor-pointer  text-slate-600">{item.label}</label>
        </div>
      ))}
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-500 text-xs font-semibold col-start-2 col-end-3 -mt-10">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default RadioInput;
