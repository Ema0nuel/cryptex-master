const homeBtn = document.getElementById("home")
const tradeBtn = document.getElementById("trade")
const userBtn = document.getElementById("user")
const homeDiv = document.getElementById("homeDiv")
const tradeDiv = document.getElementById("tradeDiv")
const userDiv = document.getElementById("userDiv")

homeBtn.addEventListener("click", () => {
  homeBtn.classList.add("active")
  tradeBtn.classList.remove("active")
  userBtn.classList.remove("active")
  homeDiv.classList.remove("hidden")
  tradeDiv.classList.add("hidden")
  userDiv.classList.add("hidden")
})

userBtn.addEventListener("click", () => {
  userBtn.classList.add("active")
  homeBtn.classList.remove("active")
  tradeBtn.classList.remove("active")
  userDiv.classList.remove("hidden")
  homeDiv.classList.add("hidden")
  tradeDiv.classList.add("hidden")
})

tradeBtn.addEventListener("click", () => {
  tradeBtn.classList.add("active")
  homeBtn.classList.remove("active")
  userBtn.classList.remove("active")
  tradeDiv.classList.remove("hidden")
  homeDiv.classList.add("hidden")
  userDiv.classList.add("hidden")
})

document.getElementById("withdraw")
  .addEventListener("click", () => {
    alert("You have not reached withdrawal limit ($1000)\nMake more investment to reach withdrawal limit")
  })