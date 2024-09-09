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
const uWallet = document.getElementById("uWallet");
const uName = document.getElementById("uName");
const uAccount = document.getElementById("uAccount");
const uEmail = document.getElementById("uEmail");
const uCurrency = document.getElementById("uCurrency");
const vEmail = document.getElementById("vEmail");
const nextBtn = document.getElementById("next");

onAuthStateChanged(auth, (user) => {
  const loggedInUserId = localStorage.getItem("loggedInUserId");
  if (user.emailVerified === false) {
    alert("Email not verified");
  } else {
    vEmail.setAttribute("checked", "true");
  }
  if (loggedInUserId) {
    const docRef = doc(db, "users", loggedInUserId);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          let balVal = userData.balance;
          uName.value = `${userData.firstName} ${userData.lastName}`;
          uWallet.value = `${userData.wallet}`;
          uCurrency.value = `${userData.currency}`;
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
          nextBtn.addEventListener("click", () => {
            let uBalance = localStorage.getItem("new-balance")
              ? localStorage.getItem("new-balance")
              : userData.balance;
            if (uAccount.value === "" || uEmail.value === "") {
              alert("Fill out the parameters");
            } else {
              if (!confirm("Are you sure you want to place a withdrawal?")) {
                alert("You have cancel withdrawal");
              } else if (
                Number(uAccount.value) > Number(uBalance) ||
                Number(uAccount.value) <= 10
              ) {
                alert("Unable to withdraw");
                uAccount.value = "";
                uEmail.value = "";
                document.getElementById("withdrawDiv").classList.add("hidden");
                withdrawBtn.classList.remove("hidden");
                document.getElementById("homeDiv").classList.remove("hidden");
                document
                  .querySelector(".active-market")
                  .classList.remove("hidden");
              } else {
                let div = document.createElement("div");
                div.className = "success-container";

                div.innerHTML = `
                    <div class="success">
                      <div class="success-img-div">
                        <img src="../assets/images/success.png" class="success-img" />
                      </div>
                      <div class="success-contain">
                        <p>You have successfully placed a withdrawal of $${uAccount.value}</p>
                        <p>We would send a mail to ${uEmail.value} in other to complete your KYC.</p>
                      </div>
                    </div>
                  </div>
                `;
                document.body.appendChild(div);
                setTimeout(() => {
                  document.body.removeChild(div);
                }, 5000);
                uAccount.value = "";
                uEmail.value = "";
                document.getElementById("withdrawDiv").classList.add("hidden");
                withdrawBtn.classList.remove("hidden");
                document.getElementById("homeDiv").classList.remove("hidden");
                document
                  .querySelector(".active-market")
                  .classList.remove("hidden");
              }
            }
          });
          tradeBtn.addEventListener("click", () => {
            let trade = Number(userData.investment);
            if (trade <= 0) {
              alert("Make an investment to trade");
            } else {
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
                    if (newProfit < 5.0) {
                      profitVal.style.color = "red";
                    } else {
                      profitVal.style.color = "green";
                    }
                    takeBtn.addEventListener("click", () => {
                      let val = Number(balVal);
                      let result = (val += Number(newProfit));
                      let newBalance = result + Number(newProfit);
                      document.getElementById(
                        "loggedUserBalance"
                      ).innerHTML = `$${newBalance.toFixed(1)}`;
                      localStorage.setItem("new-balance", newBalance);
                      let balance = localStorage.getItem("new-balance");
                      const userData = {
                        balance: balance ? balance : balVal,
                      };
                      const docRef = doc(db, "users", user.uid);
                      updateDoc(docRef, userData);
                    });
                  }, 3000);
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
  let random = ((Math.random() * 10) / (val / 10)).toFixed(1);
  return random;
}
