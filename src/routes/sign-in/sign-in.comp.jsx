import { getRedirectResult } from "firebase/auth";
import React, { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.comp";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const fetchRedirect = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      await createUserDocumentFromAuth(response.user);
    }
  };

  useEffect(() => {
    fetchRedirect();
  }, []);

  return (
    <div>
      <button onClick={signInWithGoogleRedirect}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
