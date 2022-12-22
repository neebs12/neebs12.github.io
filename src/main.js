import "./style.css";
const menu = document.getElementById("menu");
const menuItems = [...document.getElementsByClassName("menuItem")];

menu.addEventListener("click", (e) => {
  e.preventDefault();

  menuItems.forEach((menuItem) => {
    menuItem.classList.toggle("hidden");
    menuItem.classList.toggle("flex");
  });
});

const earthEmojis = ["🌎", "🌍", "🌏"];
let j = 0;

const _changeEarth = () => {
  j = (j + 1) % earthEmojis.length;
  document.getElementById("globe-spin").innerHTML = earthEmojis[j];
};

setInterval(_changeEarth, 750);

window.addEventListener("load", () => {
  // get width of the screen
  const initWidth = window.innerWidth;
  // get the element with logo id
  const logoImgLarge = document.getElementById(
    "highlighted-project-logo-large"
  );
  const logoImgSmall = document.getElementById(
    "highlighted-project-logo-small"
  );
  // get fourth project card
  const fourthProj = document.getElementById("fourth-project");
  // get project headline
  const projHeadline = document.getElementById("top-project-headline");

  // get the main proj background div
  const mainProjBg = document.getElementById("main-proj-background");

  // get footer div
  const footer = document.getElementById("footer");

  const revertToLargeClasses = () => {
    // show this large image
    logoImgLarge.classList.remove("hidden");
    // hide small image
    logoImgSmall.classList.add("hidden");
    // hide fourth project
    fourthProj.classList.add("hidden");

    // modify project headline with text-5xl from text-4xl
    projHeadline.classList.replace("text-4xl", "text-5xl");

    // get parent element, div
    const parentElm = logoImgLarge.parentElement;

    parentElm.classList = "";
    // revert to: "aspect-w-1 aspect-h-1"
    parentElm.classList.add("aspect-w-1");
    parentElm.classList.add("aspect-h-1");

    // get grandparent element, div
    const grandParentElm = parentElm.parentElement;

    grandParentElm.classList = "";
    // revert to: "max-w-sm mx-auto px-4 sm:px-6 lg:p-0"
    grandParentElm.classList.add("max-w-sm");
    grandParentElm.classList.add("mx-auto");
    grandParentElm.classList.add("px-4");
    grandParentElm.classList.add("sm:px-6");
    grandParentElm.classList.add("lg:p-0");

    // for main proj and footer background, revert classes to "bg-gradient-to-r from-darkbluetheme via-lightbluetheme to-darkbluetheme"
    [mainProjBg, footer].forEach((elm) => {
      elm.classList = "";

      elm.classList.add("bg-gradient-to-r");
      elm.classList.add("from-darkbluetheme");
      elm.classList.add("via-lightbluetheme");
      elm.classList.add("to-darkbluetheme");
    });
  };

  const revertToSmallClasses = () => {
    // hide large image
    logoImgLarge.classList.add("hidden");
    // show small image
    logoImgSmall.classList.remove("hidden");
    // show fourth project
    fourthProj.classList.remove("hidden");
    // modify project headline with text-4xl from text-5xl
    projHeadline.classList.replace("text-5xl", "text-4xl");

    // get parent element, div
    const parentElm = logoImgSmall.parentElement;

    parentElm.classList = "";
    // revert to: ""
    // parentElm.classList.add("aspect-w-1");
    // parentElm.classList.add("aspect-h-1");

    // get grandparent element, div
    const grandParentElm = parentElm.parentElement;
    grandParentElm.classList = "";
    // revert to: "max-w-sm mx-auto px-4 sm:px-6 bg-white drop-shadow-2xl rounded-3xl"
    grandParentElm.classList.add("max-w-sm");
    grandParentElm.classList.add("mx-auto");
    grandParentElm.classList.add("px-6");
    // grandParentElm.classList.add("py-3");
    // grandParentElm.classList.add("bg-gray-50");
    grandParentElm.classList.add("bg-transparent");
    // grandParentElm.classList.add("drop-shadow-2xl");
    grandParentElm.classList.add("rounded-3xl");

    // for main proj background, revert classes to "bg-gradient-to-r from-darkbluetheme to-lightbluetheme"
    [mainProjBg, footer].forEach((elm) => {
      elm.classList = "";

      elm.classList.add("bg-gradient-to-r");
      elm.classList.add("from-darkbluetheme");
      elm.classList.add("to-lightbluetheme");
    });
  };

  // condition img for width < 1024px
  if (initWidth < 1024) {
    revertToSmallClasses();
  } else {
    revertToLargeClasses();
  }

  // attach event listener to window when resizing
  window.addEventListener("resize", () => {
    // get width of the screen
    const width = window.innerWidth;
    // condition img for width < 1024px
    if (width < 1024) {
      revertToSmallClasses();
    } else {
      revertToLargeClasses();
    }
  });
});
