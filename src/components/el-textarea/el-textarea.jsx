import React from 'react';
import PropTypes from 'prop-types'

function ElTextarea({ label, rows }) {
  return (
    <div class="flex w-full">
      <textarea
        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
      "
        id="exampleFormControlTextarea1"
        rows={rows}
        placeholder={label}
      />
    </div>
  );
}

ElTextarea.defaultProps = {
  rows: 5
};

ElTextarea.propTypes = {
  rows: PropTypes.string,
};

export default ElTextarea;
