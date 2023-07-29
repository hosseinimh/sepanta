import React from 'react';

const AddMultiInput = ({
  title,
  onAddInput,
  onChange,
  arr,
  name,
  customStyleInput = "",
}) => {
  return (
    <div className="w-full my-5">
      <div className="flex items-center">
        <label className="text-primaryColor mb-1 text-sm flex-[2]">
          {title}
        </label>
        <button onClick={onAddInput} className="flex flex-[5] self-start">
          <i className="icon-arrow-up before:content-['\ee7f'] before:text-xl"></i>
        </button>
      </div>
      <div className=" flex flex-wrap max-w-6xl mx-auto justify-between">
        {arr.map((item, i) => {
          return (
            <div
              key={i}
              className=" flex flex-col mt-2 w-full md:ml-5 md:w-[300px] lg:w-[250px]"
            >
              <label className="text-primaryColor mb-1 text-sm">{i + 1}</label>
              <input
                onChange={onChange}
                value={item.value}
                id={name + `${i}`}
                type={item.type}
                className={`${customStyleInput} w-full block text-sm shadow-sm bg-mainBgColor border border-borderColor rounded-full mb-1 px-4 py-3 placeholder:text-white/20 placeholder:text-xs focus:ring-4 focus:ring-primaryColor focus:ring-opacity-20 focus:border-primaryColor focus:border-opacity-40 focus-visible:outline-0 `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddMultiInput;
