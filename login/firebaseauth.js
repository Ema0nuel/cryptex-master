// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7SboRYCsZ6MIDJDnuDKRedMTMciIE3Ko",
  authDomain: "broker-form-5be63.firebaseapp.com",
  projectId: "broker-form-5be63",
  storageBucket: "broker-form-5be63.appspot.com",
  messagingSenderId: "873314391494",
  appId: "1:873314391494:web:913462cebdb9a7b389cec7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showMessage(message, divId) {
  let messageDiv = document.getElementById(divId);
  messageDiv.style.display = "block";
  messageDiv.innerHTML = message;
  messageDiv.style.opacity = 1;
  setTimeout(() => {
    messageDiv.style.opacity = 0;
  }, 5000);
}

document.getElementById("submitSignUp").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("rEmail").value;
  const password = document.getElementById("rPassword").value;
  const firstName = document.getElementById("lName").value;
  const lastName = document.getElementById("fName").value;
  const wallet = document.getElementById("rWallet").value;
  const currency = document.getElementById("rCurrency").value;

  const auth = getAuth();
  const db = getFirestore();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      sendEmailVerification(auth.currentUser).then(() => {
        alert("We sent a verification to your email!");
      });

      const user = userCredential.user;
      const userData = {
        balance: (0).toFixed(2),
        email,
        firstName,
        lastName,
        wallet,
        currency,
      };
      showMessage("Account Created Successfully", "signUpMessage");
      const docRef = doc(db, "users", user.uid);
      setDoc(docRef, userData)
        .then(() => {
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error("error writing document", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        showMessage("Email already exist", "signUpMessage");
      } else {
        showMessage("Unable to create user", "signUpMessage");
      }
    });
});

const signIn = document.getElementById("submitSignIn");
signIn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showMessage("Login is successful", "signInMessage");
      const user = userCredential.user;
      localStorage.setItem("loggedInUserId", user.uid);
      window.location.href = "user.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === "auth/invalid-credential") {
        showMessage("Incorrect Email or Password", "signInMessage");
      } else {
        showMessage("Account does not exist", "signInMessage");
      }
    });
});
