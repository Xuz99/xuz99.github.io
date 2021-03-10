// auto date on footer
const date = new Date();
const year = date.getFullYear();
document.getElementById("autoyear").innerHTML = year;

// hide about me section
const doc = document;
const toggleBtn = doc.querySelector("#Btn");
const aboutme = doc.querySelector("#Aboutme");

toggleBtn.addEventListener("click", (event) => {
  if (aboutme.classList.contains("hidden")) {
    aboutme.classList.remove("hidden");
  } else {
    aboutme.classList.add("hidden");
  }
});

// Website Preloader
const loader = doc.querySelector("#Loader");
const loaderContent = doc.querySelector("#Loader-content");
const body = doc.getElementsByTagName("BODY")[0];

window.addEventListener("DOMContentLoaded", () =>
  setTimeout(function () {
    loader.classList.add("hide-loader");
    loaderContent.classList.add("hide-loader");
  }, 1500)
);

window.addEventListener("DOMContentLoaded", () =>
  setTimeout(function () {
    body.removeAttribute("style", "overflow: hidden;");
  }, 1600)
);
