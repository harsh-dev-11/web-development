const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  if (caseInsensitiveFlag.checked && globalFlag.checked) {
    return "gi";
  } else if (caseInsensitiveFlag.checked) {
    return "i";
  } else if (globalFlag.checked) {
    return "g";
  } else {
    return "";
  }
}

testButton.addEventListener("click", () => {
  let text = stringToTest.textContent;
  let flags = getFlags();
  let regex = new RegExp(regexPattern.value, flags);

  if (regex.test(text)) {
    stringToTest.innerHTML = text.replace(
      regex,
      `<span class="highlight">${regexPattern.value}</span>`
    );
    testResult.textContent = `${regexPattern.value}`;
  } else {
    testResult.textContent = "no match";
  }
});
