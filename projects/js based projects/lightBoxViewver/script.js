const firstImage = document.getElementById("firstImage");
const secondImage = document.getElementById("secondImage");
const thirdImage = document.getElementById("thirdImage");
const lightBoxContainer = document.querySelector(".lightbox");
const lightBoxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

firstImage.addEventListener("click", function () {
  lightBoxImage.src =
    "https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg";
  lightBoxContainer.style.display = "flex";
});
secondImage.addEventListener("click", function () {
  lightBoxImage.src = "https://cdn.freecodecamp.org/curriculum/labs/storm.jpg";
  lightBoxContainer.style.display = "flex";
});
thirdImage.addEventListener("click", function () {
  lightBoxImage.src = "https://cdn.freecodecamp.org/curriculum/labs/trees.jpg";
  lightBoxContainer.style.display = "flex";
});

lightBoxContainer.addEventListener("click", function () {
  lightBoxContainer.style.display = "none";
});

closeBtn.addEventListener("click", function () {
  lightBoxContainer.style.display = "none";
  lightBoxImage.src = "";
});
