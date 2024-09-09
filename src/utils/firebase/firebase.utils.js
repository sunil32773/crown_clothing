import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Firestore

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOiQt1U6I8T_UO3w4gbr7UbU5x3eRp2BE",
  authDomain: "react-clothing-app1.firebaseapp.com",
  projectId: "react-clothing-app1",
  storageBucket: "react-clothing-app1.appspot.com",
  messagingSenderId: "999230469889",
  appId: "1:999230469889:web:048cfc062446e1339d0d00",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

//  ----------- SigIn with Google redirect and popup --------------------

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
// Firestore

export const db = getFirestore();

// Adding collections to firebase
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // initialized a collection in db
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  // looping the collection of our data and adding batch functionality to
  objectsToAdd.forEach(obj => {
    // referencing the database
    const docRef = doc(collectionRef, obj.title.toLowerCase());

    batch.set(docRef, obj);
  });
  /**
   * I - 1000
   *
   *
   *
   *
   * You - 1000
   */

  await batch.commit();
  // console.log("Done!");
};

// GETTING PRODUCT CATEGORIES FROM FIRESTORE

export const getCategoriesAndDocuments = async () => {
  // REFERRING TO COLLECTION IN OUR FIRESTORE
  const collectionRef = collection(db, "categories");

  // CREATING A QUERY BASED ON THE REFERENCE
  const q = query(collectionRef);

  // GETTING DOCS OF THE QUERY --
  // DEPENDS ON COLLECTION KEY WE PASS INSIDE COLLECTIONREF
  const querySnapshot = await getDocs(q);
  // querySnapshot.docs;

  return querySnapshot.docs.map((docSnapShot) => docSnapShot.data())
};

// DATA STRUCTURE
/*

{
  hats: {
    title: 'hats',
    items: [
      {},
      {}
    ]
  },
  sneakers: {
    title: 'sneakers',
    items: [
      {},
      {}
    ]
  }
}


*/

//   console.log(db);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot);
  // console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error.message, "error creating user");
    }
  }

  return userSnapShot;

  // if user data does not exist

  // create / set the document with the data from userAuth in my collection

  // if user data exists
};

export const createAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = callback => {
  onAuthStateChanged(auth, callback);
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
} 