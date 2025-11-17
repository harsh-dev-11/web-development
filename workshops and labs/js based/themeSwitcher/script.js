const themes = [
  {
    name: "nimbus",
    message: "You have selected the Nimbus theme.",
  },
  {
    name: "graphite",
    message: "You have selected the Graphite theme.",
  },
];

const button = document.getElementById("theme-switcher-button");
const theme_dropdown = document.getElementById("theme-dropdown");
const nimbusTheme = document.getElementById("theme-nimbus");
const graphiteTheme = document.getElementById("theme-graphite");
const themeMessage = document.querySelector("[aria-live='polite']");

let dropdown = "closed";

// dropdown toggle event listener
button.addEventListener("click", () => {
  if (dropdown === "closed") {
    // open the dropdown
    theme_dropdown.hidden = false;
    button.setAttribute("aria-expanded", "true");
    dropdown = "open";
  } else {
    // close the dropdown
    theme_dropdown.hidden = true;
    dropdown = "closed";
    themeMessage.hidden = true;
    button.setAttribute("aria-expanded", "false");
    themeMessage.textContent = "";
  }
});

// theme selection event listeners
nimbusTheme.addEventListener("click", () => {
  // remove graphite class if present
  document.querySelector("body").classList.remove("theme-graphite");
  document.querySelector("body").classList.add("theme-nimbus");
  // configuring the message
  themeMessage.textContent = themes[0].message;
  themeMessage.hidden = false;
  themeMessage.style.color = "black";
});

graphiteTheme.addEventListener("click", () => {
  // remove nimbus class if present
  document.querySelector("body").classList.remove("theme-nimbus");
  document.querySelector("body").classList.add("theme-graphite");
  // configuring the message
  themeMessage.textContent = themes[1].message;
  themeMessage.hidden = false;
  themeMessage.style.color = "white";
});
