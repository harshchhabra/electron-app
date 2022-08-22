import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ELInput({
  name,
  value,
  placeholder,
  disabled,
  error,
  classNames,
  ...rest
}) {
  const [val, setVal] = useState('');

  useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <div className={`el-input ${classNames}`}>
      {placeholder && (
        <span class="block text-sm font-medium text-slate-700">
          {placeholder}
        </span>
      )}
      <input
        type="email"
        className={`relative my-2 py-2 px-2 pr-10 w-full outline-none border border-gray-400 text-sm text-gray-700 placeholder-gray-400 ${
          classNames.indexOf('group-l') > -1 ? 'rounded-r' : 'rounded'
        } ${
          disabled
            ? 'bg-gray-200 cursor-not-allowed'
            : 'bg-white focus:ring-indigo-500 focus:border-indigo-500'
        }`}
        value={val}
        {...rest}
        disabled={disabled}
        placeholder={placeholder}
      />
      {error && (
        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}

ELInput.defaultProps = {
  classNames: '',
  value: '',
  disabled: false,
  type: 'text',
  placeholder: null,
  name: null,
  error: null,
};

ELInput.propTypes = {
  classNames: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
};

export default ELInput;
