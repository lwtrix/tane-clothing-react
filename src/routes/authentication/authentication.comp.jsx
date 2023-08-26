import './authentication.styles.scss'
import React from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.comp";
import SignUpForm from "../../components/sign-up-form/sign-up-form.comp";

const Authentication = () => {

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
