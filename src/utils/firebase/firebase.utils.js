import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDimh25PeYkU0qM6iXaMK46LxQl1Zwkpr4",
    authDomain: "tane-clothing.firebaseapp.com",
    projectId: "tane-clothing",
    storageBucket: "tane-clothing.appspot.com",
    messagingSenderId: "915780113538",
    appId: "1:915780113538:web:828d0e7c83a299d5f0d09b",
    measurementId: "G-LLCM8FZKM6"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
      prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

  export const db = getFirestore()
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    
    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        })
      } catch (err) {
        console.log('Error creating user', err.message)
      }
    }

    return userDocRef
  }