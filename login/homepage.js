import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getFirestore,
  getDoc,
  updateDoc,
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
  appId: "1:681870967769:web:6d068cf024189714a80fc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
let profitVal = document.getElementById("profit");
let takeBtn = document.getElementById("take-btn");
let tradeBtn = document.getElementById("trade-btn");
let tradeDiv = document.querySelector(".js-invest");
const withdrawBtn = document.getElementById("withdraw");
takeBtn.style.cursor = "not-allowed";
takeBtn.disabled = "true";

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
          let balVal = userData.balance;

          document.getElementById(
            "loggedUserFullName"
          ).innerHTML = `USER: ${userData.firstName} ${userData.lastName}`;
          document.getElementById("loggedUserBalance").innerHTML = `$${Number(
            userData.balance
          ).toFixed(2)}`;
          document.getElementById(
            "loggedUserEmail"
          ).innerHTML = `EMAIL: ${userData.email}`;
          // let profitValue = Number(userData.profit);
          profitVal.innerHTML = "No trade";
          takeBtn.addEventListener("click", () => {
            if (profitVal.innerHTML === "No trade") {
              alert("Trading not started\nMake an investment to start trade");
              return;
            }
          });
          tradeBtn.addEventListener("click", () => {
            takeBtn.disabled = "false";
            let trade = Number(userData.investment);
            if (trade <= 0) {
              alert("Make an investment to trade");
            } else {
              tradeBtn.style.cursor = "pointer";
              takeBtn.style.cursor = "pointer";
              tradeBtn.classList.add("hidden");
              const input = document.createElement("input");
              input.className = "text";
              input.placeholder = "Enter Amount > $5";
              input.type = "number";
              const button = document.createElement("button");
              button.className = "btn";
              button.classList.add("btn-take");
              button.innerHTML = "Place trade";
              tradeDiv.appendChild(input);
              tradeDiv.appendChild(button);
              button.addEventListener("click", () => {
                let amountVal = Number(input.value);
                if (amountVal > trade) {
                  alert("Trade amount beyond investment");
                } else if (input.value === "" || input.value <= 5) {
                  alert("Enter Valid Amount");
                } else {
                  trade -= amountVal;
                  document.getElementById(
                    "investment"
                  ).innerHTML = `$${trade.toFixed(2)}`;
                  profitVal.innerHTML = `Creating margin...`;
                  setInterval(() => {
                    let newProfit = (generateRate() / amountVal).toFixed(1);
                    profitVal.innerHTML = `$${newProfit}`;
                    if (newProfit < 900) {
                      profitVal.style.color = "red";
                    } else {
                      profitVal.style.color = "green";
                    }
                    takeBtn.addEventListener("click", () => {
                      let val = Number(userData.balance);
                      let result = (val += Number(newProfit));
                      let newBalance = result + Number(newProfit);
                      document.getElementById(
                        "loggedUserBalance"
                      ).innerHTML = `$${newBalance.toFixed(1)}`;
                      localStorage.setItem("new-balance", newBalance);
                    });
                  }, 60000);
                  button.classList.add("hidden");
                  input.classList.add("hidden");
                  tradeBtn.classList.remove("hidden");

                  localStorage.setItem("new-investment", trade.toFixed(2));
                  let investment = localStorage.getItem("new-investment");
                  let balance = localStorage.getItem("new-balance");
                  const userData = {
                    balance: balance ? balance : balVal,
                    investment: investment ? investment : 0.0,
                  };
                  const docRef = doc(db, "users", user.uid);
                  updateDoc(docRef, userData);
                }
              });
            }
          });
          document.getElementById(
            "investment"
          ).innerHTML = `$${userData.investment}`;
          document.getElementById(
            "loggedUserCurrency"
          ).innerHTML = `${userData.currency}`;

          setInterval(() => {
            document.getElementById(
              "increase"
            ).innerHTML = `+ ${generateRate()}`;
            document.getElementById(
              "decrease"
            ).innerHTML = `- ${generateRate()}`;
          }, 5000);
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
  let random = ((Math.random() * 5) / (val / 10)).toFixed(1);
  return random;
}

withdrawBtn.addEventListener("click", () => {
  withdrawBtn.classList.add("hidden");
  const input = document.createElement("input");
  input.placeholder = "Enter Withdraw Amount";
  input.type = "number";
  input.className = "text";
  const button = document.createElement("button");
  button.className = "btn btn-take btn-withdraw";
  button.innerText = "Place Withdrawal";
  document.querySelector(".btn-tag").appendChild(input);
  document.querySelector(".btn-tag").appendChild(button);
  button.addEventListener("click", () => {
    let value = input.value;
    alert(
      `You have not reach the withdrawal limit\nYou placed a withdrawal of ${value} which have not reached the amount.`
    );
  });
});
