import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDimh25PeYkU0qM6iXaMK46LxQl1Zwkpr4",
  authDomain: "tane-clothing.firebaseapp.com",
  projectId: "tane-clothing",
  storageBucket: "tane-clothing.appspot.com",
  messagingSenderId: "915780113538",
  appId: "1:915780113538:web:828d0e7c83a299d5f0d09b",
  measurementId: "G-LLCM8FZKM6",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.log("Error creating user", err.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (cb) => onAuthStateChanged(auth, cb);

export const insertCollectionAndDocs = async (collectionId, objectsToAdd) => {
  const collectionRef = collection(db, collectionId)
  const batch = writeBatch(db)
  objectsToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase())
    batch.set(docRef, obj)
  })

  await batch.commit()
}

export const getCategoriesAndDocs = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})

  return categoryMap
}
