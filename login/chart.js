const home = document.getElementById("get-home");
const chart = document.getElementById("get-chart");
const wrapper = document.querySelector(".wrapper");
const chartMap = document.querySelector(".chart-map");
const trackerMap = document.querySelector(".tracker");
const tracker = document.getElementById("get-tracker");
chart.style.cursor = "pointer";
tracker.style.cursor = "pointer";
home.style.cursor = "pointer";
chart.addEventListener("click", () => {
  wrapper.classList.add("hidden");
  trackerMap.classList.add("hidden");
  chartMap.classList.remove("hidden");

  //   Active
  chart.classList.add("active");
  home.classList.remove("active");
  tracker.classList.remove("active");
});
home.addEventListener("click", () => {
  chartMap.classList.add("hidden");
  trackerMap.classList.add("hidden");
  wrapper.classList.remove("hidden");

  //   Active
  home.classList.add("active");
  chart.classList.remove("active");
  tracker.classList.remove("active");
});
tracker.addEventListener("click", () => {
  chartMap.classList.add("hidden");
  wrapper.classList.add("hidden");
  trackerMap.classList.remove("hidden");

  //   Active
  tracker.classList.add("active");
  home.classList.remove("active");
  chart.classList.remove("active");
});
