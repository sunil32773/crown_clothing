import { useState } from "react";
import {
  createAuthWithEmailAndPassword,
  userDocRef,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component"; 
import './sign-up-form.style.scss'
import Button from '../button/button.component'

// import { UserContext } from "../../context/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // console.log('hit')

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // ----------- ONCLICK FORM HANDLE CHANGE --------

  const handleChange = e => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // ----------- ONCLICK FORM HANDLE SUBMIT --------------------------------

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      // console.log(email, password);
      const { user } = await createAuthWithEmailAndPassword(email, password);
      // setCurrentUser(user);

      if (user) {
        const userDocRef = await createUserDocumentFromAuth(user, {
          displayName,
        });
        resetFormFields();
      }
    } catch (error) {
      if (error.message === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("user creation encountered an error", error.message);
      }
    }
  };

  // ---------------- FORM ------------------------------

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

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

        <FormInput
          label={"Confirm Password"}
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
