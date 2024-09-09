
# **Crown Clothing - Your Ultimate Fashion Destination**

Crown Clothing is an online fashion store built with React, offering a wide range of clothing items for every style. Our app is designed to provide a seamless shopping experience, integrating the latest web technologies.

## **Table of Contents**

- Features
- Technologies
- Installation
- Usage
- Contributing

## **Features**

- React: The app is built using React, making it fast and responsive.
- Authentication: Users can create an account, sign in with Google, or use their email and password for authentication, all handled through Firebase.
- State Management: I initially leveraged the Context API for state management and have now moved to Redux for more robust state control.
- Redux: Implementing Redux along with extended tools like, Redux Thunk for Asynchronous redux and reselect for renders optimizations within selectors and
- leverages redux persist for local storage usage for performance optimizations faster reload speeds.
- React Router: Our routing is powered by React Router, allowing for smooth navigation throughout the app.

## **Technologies**

- React
- Firebase (Authentication, Firestore)
- Redux (_Thunk, _Persist, _Reselect) (State Management)
- React Router (Routing)
- CSS-in-JS (Styled Components, Emotion, or similar)

## **Installation**

1. Clone this repository:

   ```
   git clone https://github.com/shaik-adnan1/clothing_app_main_1.git
   ```

2. Install the dependencies:

   ```
   cd clothing_app_main_1
   npm install
   ```

3. Set up Firebase:

   - Create a Firebase project at https://console.firebase.google.com/.
   - Set up authentication methods (Google, Email/Password).
   - Create a Firebase web app and obtain your Firebase configuration details.
   - Update your Firebase configuration in the app.

4. Run the app:

   ```
   npm start
   ```

## **Usage**

- Visit the deployed site at [https://your-crown-clothing-app-url.com.](https://transcendent-cendol-a3c008.netlify.app/)
- Browse the extensive collection of clothing items.
- Sign in and enjoy a personalized shopping experience.
- Explore the smooth navigation facilitated by React Router.
