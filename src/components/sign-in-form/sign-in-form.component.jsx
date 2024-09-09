import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

import {
  createAuthWithEmailAndPassword,
  userDocRef,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import "./sign-in-form.style.scss";

import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const dispatch = useDispatch();

  // importing the value of a userContext.

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // ----------- ONCLICK FORM HANDLE CHANGE --------

  const signInWithGoogle = () => {
    dispatch(googleSignInStart())
  };

  const handleChange = e => {
    const { name, value } = e.target;

    // console.log(name, value);

    setFormFields({ ...formFields, [name]: value });
  };

  // ----------- ONCLICK FORM HANDLE SUBMIT --------------------------------

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart())
      // Now we can use the properties/values form the userContext object
      // setCurrentUser(user)
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password and email");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
          console.log(error.message);
      }
    }
  };
  // ---------------- FORM ------------------------------

  return (
    <div className='sign-up-container'>
      <h2>Sign in with your email and password</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label={"Password"}
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button
            // className='testclass'
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
