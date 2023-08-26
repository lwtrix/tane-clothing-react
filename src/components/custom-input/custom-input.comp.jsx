import React from "react";

import "./custom-input.styles.scss";

const CustomInput = ({ label, ...otherProps }) => {
  return (
    <div className="custom-input-group">
      <input {...otherProps} className="custom-input" />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } custom-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CustomInput;
