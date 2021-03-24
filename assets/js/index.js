// Template literal for my instagram feed
var feed = new Instafeed({
  accessToken: InstagramToken,
  limit: 12,
  template: `<figure class="photo shadow-lg bg-black text-white overflow-hidden rounded-lg">
            <a class="cursor-pointer" href="{{link}}" target="_blank">
                <img src="{{image}}" alt="" class="w-full h-80 object-cover hover:opacity-75 ease-in duration-200">
            </a>
            <figcaption class="m-4  overflow-auto h-24 leading-7">
                <span class="block">{{caption}}</span>
            </figcaption>
            </figure>    
            `,
});
feed.run();

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
