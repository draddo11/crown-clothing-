import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const config ={
        apiKey: "AIzaSyB-y2wspUw8nEjZKMR3uwWEKwuxt4Z8n8k",
        authDomain: "crown-eb550.firebaseapp.com",
        databaseURL: "https://crown-eb550.firebaseio.com",
        projectId: "crown-eb550",
        storageBucket: "crown-eb550.appspot.com",
        messagingSenderId: "487045629101",
        appId: "1:487045629101:web:5b67aff7dc778c80443224",
        measurementId: "G-0226J8LD38"
      };

      export const  createUserProfileDocument = async (userAuth, additionalData)=>{
        if (!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        
        const snapShot= await userRef.get();

        console.log(snapShot);

        if (!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          try{
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
          }catch(error){
            console.log(`error creating user` , error.message);
          }
        }

        return userRef;
      };


      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();
      
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt: 'select_account'});
      export const signInWithGoogle=()=> auth.signInWithPopup(provider);

      export default firebase;
