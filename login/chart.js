const homeBtn = document.getElementById("home");
const tradeBtn = document.getElementById("trade");
const userBtn = document.getElementById("user");
const homeDiv = document.getElementById("homeDiv");
const tradeDiv = document.getElementById("tradeDiv");
const userDiv = document.getElementById("userDiv");
const withdrawDiv = document.getElementById("withdrawDiv")
const withDrawBtn = document.getElementById("withdraw");

homeBtn.addEventListener("click", () => {
  document.querySelector(".active-market").classList.remove("hidden");
  homeBtn.classList.add("active");
  tradeBtn.classList.remove("active");
  userBtn.classList.remove("active");
  homeDiv.classList.remove("hidden");
  tradeDiv.classList.add("hidden");
  userDiv.classList.add("hidden");
  withdrawDiv.classList.add("hidden");
  withDrawBtn.classList.remove("hidden")
});

userBtn.addEventListener("click", () => {
  document.querySelector(".active-market").classList.remove("hidden");
  userBtn.classList.add("active");
  homeBtn.classList.remove("active");
  tradeBtn.classList.remove("active");
  userDiv.classList.remove("hidden");
  homeDiv.classList.add("hidden");
  tradeDiv.classList.add("hidden");
  withdrawDiv.classList.add("hidden");
  withDrawBtn.classList.remove("hidden")
});

tradeBtn.addEventListener("click", () => {
  document.querySelector(".active-market").classList.remove("hidden");
  tradeBtn.classList.add("active");
  homeBtn.classList.remove("active");
  userBtn.classList.remove("active");
  tradeDiv.classList.remove("hidden");
  homeDiv.classList.add("hidden");
  userDiv.classList.add("hidden");
  withdrawDiv.classList.add("hidden");
  withDrawBtn.classList.remove("hidden")
});

withDrawBtn.addEventListener("click", () => {
  document.querySelector(".active-market").classList.add("hidden");
  homeBtn.classList.remove("active");
  tradeBtn.classList.remove("active");
  userBtn.classList.remove("active");
  withdrawDiv.classList.remove("hidden");
  withDrawBtn.classList.add("hidden")
  tradeDiv.classList.add("hidden");
  homeDiv.classList.add("hidden");
  userDiv.classList.add("hidden");
});
