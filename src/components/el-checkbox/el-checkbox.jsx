import React from 'react';

const ElCheckbox = ({ disabled, label, ...rest }) => {
  console.log(rest);
  return (
    <div class="el-checkbox flex items-center">
      <input
        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        id={label}
        {...rest}
      />
      <label
        class="form-check-label flex text-gray-800 text-sm"
        for={label}
      >
        {label}
      </label>
    </div>
  );
};

export default ElCheckbox;
