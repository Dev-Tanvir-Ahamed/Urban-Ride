import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'


const Login = () => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    let [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
     }else {
        firebase.app(); // if already initialized, use that one
     }
    let handleGooleSignIn = () => {
      
        var provider = new firebase.auth.GoogleAuthProvider();
    

        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var {displayName, email, photoURL} = result.user;
    let signInUser = {name : displayName, email, photo:photoURL}
    setLoggedInUser(signInUser);
    history.replace(from)
    


  }).catch((error) => {
  
    var errorCode = error.code;
    var errorMessage = error.message;

    var email = error.email;
    
    var credential = error.credential;
   
  });
    }

    let handleFacebookSignIn = () => {
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var {displayName, email, photoURL} = result.user;
    let signInUser = {name : displayName, email, photo:photoURL}
    setLoggedInUser(signInUser);
    history.replace(from)

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
    }

    return (
        <div>
            <h1 className="login-user">Log In User</h1>
            <div className="login">
                <div className="login-google">
                <button className="btn btn-outline-primary" onClick={handleGooleSignIn}>Google Sign In</button>
                </div>
                <div className="log-facebook">
                <button className="btn btn-outline-primary" onClick={handleFacebookSignIn}>Facebook Sign In</button>
                </div>    
            </div>
            
        </div>
    );
};

export default Login;