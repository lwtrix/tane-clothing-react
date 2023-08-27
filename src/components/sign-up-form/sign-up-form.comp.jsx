import "./sign-up-form.styles.scss";
import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import CustomInput from "../custom-input/custom-input.comp";
import CustomButton from "../custom-button/custom-button.comp";

const SignUpForm = () => {
  const defaultDataModel = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formValues, setFormValues] = useState(defaultDataModel);
  const { name, email, password, confirmPassword } = formValues;

  const handleFieldChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName: name });
      setFormValues(defaultDataModel);
    } catch (error) {
      console.log("Error signing up", error.code);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Not registered?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <CustomInput
          label={"Name"}
          type="text"
          value={name}
          onChange={(e) => handleFieldChange("name", e.target.value)}
          required
        />
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
        <CustomInput
          label={"Confirm Password"}
          type="password"
          value={confirmPassword}
          onChange={(e) => handleFieldChange("confirmPassword", e.target.value)}
          required
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUpForm;
