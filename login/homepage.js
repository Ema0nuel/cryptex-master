import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getFirestore,
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, (user) => {
  const loggedInUserId = localStorage.getItem("loggedInUserId");
  if (user.emailVerified === false) {
    alert("Email not verified");
  }
  if (loggedInUserId) {
    const docRef = doc(db, "users", loggedInUserId);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          document.getElementById(
            "loggedUserFullName"
          ).innerHTML = `Welcome, ${userData.firstName} ${userData.lastName}`;
          document.getElementById(
            "loggedUserBalance"
          ).innerHTML = `${userData.balance}`;
          document.getElementById(
            "loggedUserEmail"
          ).innerHTML = `${userData.email}`;
          document.getElementById(
            "loggedUserCurrency"
          ).innerHTML = `${userData.currency}`;
          let balanceAmount = Number(userData.balance);
          setInterval(() => {
            if (balanceAmount > 0.1) {
              document.getElementById("increase").innerHTML = `+${generateRate(
                balanceAmount
              )}`;
              document.getElementById("decrease").innerHTML = `-${generateRate(
                balanceAmount
              )}`;
            } else {
              document.getElementById(
                "increase"
              ).innerHTML = `+ ${generateRate()}`;
              document.getElementById(
                "decrease"
              ).innerHTML = `- ${generateRate()}`;
            }
          }, 500);
        } else {
          console.log("No document found matching id");
        }
      })
      .catch((error) => {
        console.log("error getting document" + error);
      });
  } else {
    console.log("User Id not found");
  }
});

const logOut = document.getElementById("logout");
logOut.addEventListener("click", () => {
  localStorage.removeItem("loggedInUserId");
  signOut(auth)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log("Failed to log out", error);
    });
});

function generateRate(val = 0.54) {
  let random = ((Math.random() * 1000) / (val / 10)).toFixed(1);
  return random;
}
