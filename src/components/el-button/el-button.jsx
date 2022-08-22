import React from 'react';
import PropTypes from 'prop-types';
// import './style.css';

function ELButton({
  value,
  disabled,
  type: buttonType,
  isLoading,
  onClick,
  type,
  classNames,
  textColor,
  icon
}) {
  const getColors = () => {
    switch (type) {
      case 'light-blue':
        return 'bg-indigo-400 hover:bg-indigo-500';
      case 'blue':
      default:
        return 'bg-indigo-700 hover:bg-indigo-800';
    }
  };
  const disabledClass = disabled
    ? ' bg-gray-500 cursor-not-allowed'
    : ` ${classNames ? classNames : getColors()}`;
  return isLoading ? (
    <div className="el-button-loading">
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        />
      </svg>
    </div>
  ) : (
    <div
      className={`el-button flex justify-center items-center cursor-pointer px-5 py-2 text-sm leading-5 rounded-full font-semibold ${textColor} ${disabledClass}`}
      disabled={disabled}
      onClick={!!onClick && !disabled && onClick}
    >
      {!!icon && icon}
      {value}
    </div>
  );
}

ELButton.defaultProps = {
  onClick: () => {},
  value: null,
  disabled: false,
  type: 'button',
  isLoading: false,
  type: 'blue',
  classNames: '',
  textColor: 'text-white',
  icon: null
};

ELButton.propTypes = {
  icon: PropTypes.element,
  onClick: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  classNames: PropTypes.string,
};

export default ELButton;
