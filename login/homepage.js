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
  apiKey: "AIzaSyBNn8iA_LL0S3SQdLo6TIM4ACCCcLgS1Xg",
  authDomain: "cryptex-master.firebaseapp.com",
  projectId: "cryptex-master",
  storageBucket: "cryptex-master.appspot.com",
  messagingSenderId: "681870967769",
  appId: "1:681870967769:web:6d068cf024189714a80fc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
let profitVal = document.getElementById("profit");
let takeBtn = document.getElementById("take-btn");
let tradeBtn = document.getElementById("trade-btn");

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
          ).innerHTML = `USER: ${userData.firstName} ${userData.lastName}`;
          document.getElementById(
            "loggedUserBalance"
          ).innerHTML = `$${userData.balance}`;
          document.getElementById(
            "loggedUserEmail"
          ).innerHTML = `EMAIL: ${userData.email}`;
          let profitValue = Number(userData.profit);
          setInterval(() => {
            let newProfit = generateRate() + profitValue
            profitVal.innerHTML = `$${newProfit}`;
          },2000);
          takeBtn.addEventListener("click", () => {
            setInterval(() => {
              console.log(profitVal.innerHTML);
            },2000)
          })
          document.getElementById("investment").innerHTML = `$${userData.investment}`
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
  let random = ((Math.random() * 100) / (val / 10)).toFixed(1);
  return random;
}
