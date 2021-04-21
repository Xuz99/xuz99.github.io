// Template literal for my portfolio items
const portfolioData = [
  {
    itemLink: "https://github.com/Xuz99",
    hasDemoAndGitLink: false,
    itemImgSrc: "/assets/images/github.svg",
    itemImgAlt: "Github profile Isometric icon",
    itemTitle: "Github profile",
    itemDescription:
      "My personal Github profile with a collection of my active repos.",
  },
  {
    itemLink: "https://inmountapp.surge.sh/",
    itemRepoLink: "https://github.com/Xuz99/Inverted-Mountain-React-version",
    hasDemoAndGitLink: true,
    itemImgSrc: "/assets/images/inverted.svg",
    itemImgAlt: "Inverted Mountain Isometric icon",
    itemTitle: "Inverted Mountain",
    itemDescription:
      'Business website for indie games studio "inVERTed mOUNTAIn" built using React for the newsletter API to a <a href="https://www.phoenixframework.org/" class="text-blue-500" target="_blank">Phoenix</a> backend, styled using <a href="https://tailwindcss.com/" class="text-blue-500" target="_blank">Tailwind</a> and made with love by myself! </span>',
  },
  {
    itemLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    itemRepoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    hasDemoAndGitLink: false,
    itemImgSrc: "/assets/images/break.svg",
    itemImgAlt: "Short Breaks Blog Isometric icon",
    itemTitle: "Short Breaks",
    itemDescription:
      '<span class="line-through opacity-50">My personal blog called "Short Breaks" where I post writing content weekly about tech and interesting topics I like to write about.</span > Currently under construction!</span >',
  },
  {
    itemLink:
      "https://invertedmountain.invisionapp.com/console/share/XU1SJGC1NC/495987524",
    hasDemoAndGitLink: false,
    itemImgSrc: "/assets/images/phuc.svg",
    itemImgAlt: "Phúc Isometric icon",
    itemTitle: "Phúc UI High Fidelity Prototype",
    itemDescription:
      "A Vietnamese aesthetics inspired WordPress Theme. Currently being built. But the UI prototype is viewable. This is to flesh out the final design, flexing my UI/UX design muscles, focusing on mobile first and built using inVision. This theme is aimed at Individuals, freelancers, artists and anyone looking for a simple modern theme to publish their work online via WordPress.",
  },
  {
    itemLink: "https://rapunzel2812.surge.sh/",
    itemRepoLink: "https://github.com/Xuz99/Rapunzel-2812",
    hasDemoAndGitLink: true,
    itemImgSrc: "/assets/images/rapunzel.svg",
    itemImgAlt: "Rapunzel 2812 - jQuery Story Teller Isometric icon",
    itemTitle: "Rapunzel 2812 - jQuery Story Teller",
    itemDescription:
      "A jQuery story teller app telling a reinterpretation of the story of Rapunzel 1812. The website was made in 2017 as an end of university year group project with Fraser Marriott, and myself John Davidson. Deployed using Surge.sh",
  },
  {
    itemLink: "https://nervous-curran-955cb1.netlify.app",
    itemRepoLink: "https://github.com/Xuz99/projectNo2-playerAttackGame",
    hasDemoAndGitLink: true,
    itemImgSrc: "/assets/images/playerAttack.svg",
    itemImgAlt: "Elm Player Attack Isometric icon",
    itemTitle: "Elm Player Attack Game",
    itemDescription:
      "Front-end web app/game of a player attacking a enemy game, with a win screen. Built as an introduction into functional language Elm and how to build a game. Deployed from a GitHub repo using netlify.",
  },
];

function portfolioTemplate(data) {
  if (data.hasDemoAndGitLink === false) {
    return `
    <figure class="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg bg-black text-white overflow-hidden rounded-lg" >
      <a class="cursor-pointer" href="${data.itemLink}" target="_blank">
        <img src="${data.itemImgSrc}" alt="${data.itemImgAlt}" 
        class="w-full h-60 object-cover hover:opacity-75 ease-in duration-200"/>
      </a>
      <figcaption class="m-4 leading-7">
        <a class="cursor-pointer" href="${data.itemLink}" target="_blank" >
          <span class="jd-text-colour firasans-md text-xl">${data.itemTitle}</span>
        </a>
          <span class="block">${data.itemDescription}</span>
      </figcaption>
    </figure>
      `;
  } else {
    return `
<figure class="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg bg-black text-white overflow-hidden rounded-lg" >
  <a class="cursor-pointer" href="${data.itemLink}" target="_blank">
    <img src="${data.itemImgSrc}" alt="${data.itemImgAlt}" 
    class="w-full h-60 object-cover hover:opacity-75 ease-in duration-200"/>
  </a>
  <figcaption class="m-4 leading-7">
    <a class="cursor-pointer" href="${data.itemLink}" target="_blank" >
      <span class="jd-text-colour firasans-md text-xl">${data.itemTitle}</span>
    </a>
      <span class="block">${data.itemDescription}</span>
      <div class="flex flex-row space-x-3 mt-5">
        <a 
        class="text-center cursor-pointer animited-underline" 
        href="${data.itemRepoLink}"
        target="_blank"
        >
        <img
          class="ml-1 w-14 h-14 mb-2 fill-current text-white"
          src="assets/images/github-icon.svg"
          alt="${data.itemImgAlt}"
          title="${data.itemTitle + " - Repo"}"
          />
          <span class="text-blue-500">Repo</span>
        </a>
        <a 
        class="text-center cursor-pointer animited-underline" 
        href="${data.itemLink}"
        target="_blank"
        >
        <img
          class="ml-2 w-14 h-14 mb-2 fill-current text-white"
          src="assets/images/globe.svg"
          alt="${data.itemImgAlt}"
          title="${data.itemTitle + " - Live demo"}"
          />
          <span class="text-blue-500">Live Demo</span>
        </a>
      </div>
  </figcaption>
</figure>
  `;
  }
}

document.getElementById("Portfolio").innerHTML = `${portfolioData
  .map(portfolioTemplate)
  .join("")}
`;
