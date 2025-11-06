const firstIcon = document.getElementById("first-icon");
firstIcon.addEventListener("click", () => {
  fillIcon(firstIcon);
});
const secondIcon = document.getElementById("second-icon");
secondIcon.addEventListener("click", () => {
  fillIcon(secondIcon);
});
const thirdIcon = document.getElementById("third-icon");
thirdIcon.addEventListener("click", () => {
  fillIcon(thirdIcon);
});

let iconState = [0, 0, 0];

function fillIcon(element) {
  const isFilled = element.classList.contains("filled");
  if (isFilled) {
    element.innerHTML = "&#9825";
    element.classList.remove("filled");
  } else {
    element.innerHTML = "&#10084";
    element.classList.add("filled");
  }
}
