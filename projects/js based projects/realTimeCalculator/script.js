const inputTextArea = document.getElementById("text-input");
const charCountDisplay = document.querySelector("p span");
inputTextArea.addEventListener("input", function () {
  const currentLength = inputTextArea.value.length;
  if (currentLength >= 50) {
    document.querySelector("p").style.color = "red";
    inputTextArea.value = inputTextArea.value.slice(0, 50);
  }
  charCountDisplay.textContent = `${currentLength}/50`;
});
