let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const lightModeToggle = document.querySelector("#light-mode-toggle");

if (darkMode === "enabled" || darkMode === null) {
  darkModeToggle.style.display = "none";
  document.body.classList.add("darkmode");
} else {
  lightModeToggle.style.display = "none";
  document.body.classList.remove("darkmode");
}

darkModeToggle.addEventListener("click", enableDarkMode);

lightModeToggle.addEventListener("click", disableDarkMode);

function enableDarkMode() {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
  lightModeToggle.style.display = "block";
  darkModeToggle.style.display = "none";
}

function disableDarkMode() {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", "disabled");
  lightModeToggle.style.display = "none";
  darkModeToggle.style.display = "block";
}

// const enableDarkMode = () => {
//   // 1. Add the class to the body
//   document.body.classList.add("darkmode");
//   // 2. Update darkMode in localStorage
//   localStorage.setItem("darkMode", "enabled");
//   // swiperTitle.removeClass("active");

//   sunMode.style.display = "none";
//   moonMode.style.display = "block";
// };

// const disableDarkMode = () => {
//   // 1. Remove the class from the body
//   document.body.classList.remove("darkmode");
//   // 2. Update darkMode in localStorage
//   localStorage.setItem("darkMode", "disabled");

//   // swiperTitle.addClass("active");
//   sunMode.style.display = "block";
//   moonMode.style.display = "none";
// };

// // If the user already visited and enabled darkMode
// // start things off with it on
// if (darkMode === null || darkMode === "enabled") {
//   lightModeToggle.style.display = "block";
//   darkModeToggle.style.display = "none";
//   enableDarkMode();
// } else {
//   darkModeToggle.style.display = "block";
//   lightModeToggle.style.display = "none";
//   // sunMode.style.display = "block";
//   // moonMode.style.display = "none";
// }

// // When someone clicks the button
// darkModeToggle.addEventListener("click", () => {
//   // get their darkMode setting
//   darkMode = localStorage.getItem("darkMode");

//   // if it not current enabled, enable it
//   if (darkMode !== "enabled") {
//     enableDarkMode();

//     console.log("added");
//     // if it has been enabled, turn it off
//   } else {
//     disableDarkMode();
//   }

//   lightModeToggle.style.display = "block";
//   darkModeToggle.style.display = "none";
// });

// // When someone clicks the button
// lightModeToggle.addEventListener("click", () => {
//   // get their darkMode setting

//   darkMode = localStorage.getItem("darkMode");

//   // if it not current enabled, enable it
//   if (darkMode !== "enabled") {
//     enableDarkMode();

//     console.log("added");
//     // if it has been enabled, turn it off
//   } else {
//     disableDarkMode();
//   }

//   lightModeToggle.style.display = "none";
//   darkModeToggle.style.display = "block";
// });

// lightModeToggle.addEventListener("click", () => {
//   console.log("click");
// });
