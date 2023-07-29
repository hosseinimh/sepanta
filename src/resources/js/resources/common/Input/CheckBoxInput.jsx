import React from "react";

const CheckBoxInput = ({ checkBoxOptions, name, formik, label }) => {
  return (
    <div className="flex flex-col mt-2 mb-4 w-full md:ml-5 ">
      <label className=" text-primaryColor mb-1 text-sm">{label}</label>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {checkBoxOptions.map((item) => (
          <div key={item.id} className="flex flex-wrap ">
            <div className="block w-full lg:flex items-center gap-1">
              <input
                type="checkbox"
                id={item.id}
                name={name}
                value={item.title}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className=" text-sm shadow-sm bg-mainBgColor border border-borderColor rounded-full px-4 py-3 placeholder:text-white/20 placeholder:text-xs focus:ring-4 focus:ring-primaryColor focus:ring-opacity-20 focus:border-primaryColor focus:border-opacity-40 focus-visible:outline-0 cursor-pointer"
              />
              <label
                htmlFor={item.id}
                className="text-primaryColor text-sm cursor-pointer"
              >
                {item.title}
              </label>
            </div>
          </div>
        ))}
      </div>

      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-500 text-xs font-semibold col-start-2 col-end-3 ">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default CheckBoxInput;
