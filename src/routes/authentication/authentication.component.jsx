import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,

} from "../../utils/firebase/firebase.utils";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

import './authentication.style.scss'

// import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const Authentication = () => {

  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);

  //   if(response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   } 
  // }, [])

  // useEffect(async () => {
  //   const response = await getRedirectResult(auth)
  //   console.log(response);

  //   if(response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(user);
  };

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();

  //   console.log(user);
  // };

  return (
    <div className="authentication-container">
      <SignInForm />
         {/* <Button buttonType='google' onClick={signInWithGoogleRedirect}>
        Signin with google redirect
      </Button> */}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
