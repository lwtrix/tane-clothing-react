import './custom-button.styles.scss'
import React from "react";

const BUTTON_TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const CustomButton = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
