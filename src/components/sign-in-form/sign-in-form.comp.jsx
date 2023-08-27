import "./sign-in-form.styles.scss";
import React, { useEffect, useState } from "react";
import {
  auth,
  signInUserWithEmailAndPassword,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.comp";
import CustomInput from "../custom-input/custom-input.comp";
import { getRedirectResult } from "firebase/auth";

const SignInForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const handleFieldChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const clearFormFields = () => {
    setFormValues({ email: "", password: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      clearFormFields();
    } catch (error) {
      console.log("Error signing in", error.code);
    }
  };

  const fetchRedirect = async () => {
    await getRedirectResult(auth);
  };

  useEffect(() => {
    fetchRedirect();
  }, []);

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput
          label={"Email"}
          type="email"
          value={email}
          onChange={(e) => handleFieldChange("email", e.target.value)}
          required
        />
        <CustomInput
          label={"Password"}
          type="password"
          value={password}
          onChange={(e) => handleFieldChange("password", e.target.value)}
          required
        />
        <div className="buttons-container">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            buttonType="google"
            onClick={signInWithGoogleRedirect}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
