/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  inputValue: '',
  dropdown: false,
  items: [],
};

const noOptions = [{ label: 'No Results', value: 'no results' }];

function ELDropdown({
  name,
  value: { label: updatedLabel, value: updatedValue },
  placeholder,
  disabled,
  error,
  options,
  onChange,
  customNoResults,
  ...rest
}) {
  const parentInputEl = useRef(null);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let updatedOptions = [];
    if (options.length) {
      updatedOptions = options;
    } else {
      updatedOptions = customNoResults
        ? [{ label: customNoResults, value: customNoResults }]
        : noOptions;
    }

    setState((prevState) => ({
      ...prevState,
      items: updatedOptions,
    }));
  }, [options]);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      inputValue: updatedLabel,
      dropdown: false,
    }));
  }, [updatedValue]);

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      inputValue: e.target.value,
      dropdown: true,
    }));
  };

  const handleonFocus = () => {
    setState((prevState) => ({
      ...prevState,
      dropdown: !prevState.dropdown,
    }));
  };

  const handleClickOutside = (e) => {
    const { target } = e;
    if (!parentInputEl.current.contains(target)) {
      setState((prevState) => ({
        ...prevState,
        inputValue: prevState.inputValue,
        dropdown: false,
      }));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const { inputValue, filled, dropdown, items } = state;
  return (
    <div ref={parentInputEl} className="el-dropdown relative">
      <div className="el-dropdown-input-control">
        {placeholder && (
          <span class="block text-sm font-medium text-slate-700">
            {placeholder}
          </span>
        )}
        <div className="flex rounded-md shadow-sm flex-row items-center">
          <input
            onFocus={handleonFocus}
            className={`relative my-2 py-2 px-2 pr-10 w-full rounded outline-none border rounded-r-none border-gray-400 text-sm text-gray-700 placeholder-gray-400 ${
              disabled ? 'bg-gray-200 cursor-not-allowed' : ''
            }`}
            type="text"
            id={name}
            disabled={disabled}
            value={inputValue}
            {...rest}
          />
          {!disabled && (
            <span
              onClick={handleonFocus}
              class={`inline-flex px-3 py-1.5 rounded-r-md border border-l-0 border-gray-400 bg-white text-gray-500 text-sm`}
            >
              {dropdown ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </span>
          )}
        </div>
      </div>
      {dropdown && (
        <ul
          className={`absolute bg-white ${
            items.length > 5 ? 'h-48 overflow-scroll' : ''
          }  w-full border border-gray-200 shadow-2xl z-10 ${
            items.filter(
              (v) => v.label === 'No Results' || v.value === customNoResults,
            ).length
              ? ' no-scroll'
              : ''
          }`}
        >
          {items.map((v) => (
            <li
              className={
                inputValue === v.label
                  ? 'px-3 py-3 bg-gray-100 text-indigo-500 cursor-none text-sm'
                  : 'px-3 py-3 hover:bg-gray-100 cursor-pointer text-sm'
              }
              key={name + v.value}
              onClick={() =>
                !(v.value === 'no results' || v.value === customNoResults) &&
                onChange(v)
              }
            >
              {v.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ELDropdown.defaultProps = {
  value: {
    label: '',
    value: '',
  },
  disabled: false,
  type: 'text',
  placeholder: null,
  name: null,
  error: false,
  options: [],
  customNoResults: null,
};

ELDropdown.propTypes = {
  value: PropTypes.shape(PropTypes.objectOf),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape()),
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  customNoResults: PropTypes.string,
};

export default ELDropdown;
