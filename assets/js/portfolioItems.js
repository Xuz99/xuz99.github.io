// Template literal for my portfolio items
const portfolioData = [
  {
    itemLink: "https://github.com/Xuz99",
    itemImgSrc: "/assets/images/github.svg",
    itemImgAlt: "Github profile Isometric icon",
    itemTitle: "Github profile icon",
    itemDescription:
      "My personal Github profile with a collection of my active repos.",
  },
  {
    itemLink: "https://inmountapp.surge.sh/",
    itemImgSrc: "/assets/images/inverted.svg",
    itemImgAlt: "Inverted Mountain Isometric icon",
    itemTitle: "Inverted Mountain",
    itemDescription:
      'Business website for indie games studio "inVERTed mOUNTAIn" built using React for the newsletter API to a <a href="https://www.phoenixframework.org/" class="text-blue-500" target="_blank">Phoenix <a>backend, styled using <a href="https://tailwindcss.com/" class="text-blue-500" target="_blank">Tailwind</a> and made with love by the indie games community. </span>',
  },
  {
    itemLink: "https://www.youtube.com/watch?v=HMLguRWAMSc",
    itemImgSrc: "/assets/images/break.svg",
    itemImgAlt: "Short Breaks Blog Isometric icon",
    itemTitle: "Short Breaks",
    itemDescription:
      '<span class="line-through opacity-50">My personal blog called "Short Breaks" where I post writing content weekly about tech and interesting topics I like to write about.</span > Currently under construction!</span >',
  },
  {
    itemLink:
      "https://invertedmountain.invisionapp.com/console/Phuc-Theme-ckhf1wvam00vt017j5bs7hfg2/ckhi85pwk04iw019j06que56x/plays",
    itemImgSrc: "/assets/images/phuc.svg",
    itemImgAlt: "Phúc Isometric icon",
    itemTitle: "Phúc UI High Fidelity Prototype",
    itemDescription:
      "A Vietnamese aesthetics inspired WordPress Theme. Currently being built. But the UI prototype is viewable. This is to flesh out the final design, flexing my UI/UX design muscles, focusing on mobile first and built using inVision. This theme is aimed at Individuals, freelancers, artists and anyone looking for a simple modern theme to publish their work online via WordPress.",
  },
  {
    itemLink: "https://github.com/Xuz99/projectNo2-playerAttackGame",
    itemImgSrc: "/assets/images/playerAttack.svg",
    itemImgAlt: "Elm Player Attack Isometric icon",
    itemTitle: "Elm Player Attack Game",
    itemDescription:
      'Front-end web app/game of a player attacking a enemy game, with a win screen. Built as an introduction into functional language Elm and how to build a game. Deployed from a GitHub repo using netlify. <a href="https://nervous-curran-955cb1.netlify.app" target="_blank" class="text-blue-500">Live Demo</a>',
  },
];

function portfolioTemplate(data) {
  return `
<figure class="portfolio-card shadow-lg bg-black text-white overflow-hidden rounded-lg" >
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
}

document.getElementById("Portfolio").innerHTML = `${portfolioData
  .map(portfolioTemplate)
  .join("")}
`;
