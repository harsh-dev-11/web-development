
const generateElement = () => {
  return Math.floor(Math.random() * 100) + 1;
}

const generateArray = () => {
  const randArr = [];
  let randVal;
  for (let i=0; i<5; i++) {
    randVal = generateElement();
    randArr.push(randVal);
  }
  return randArr;
}

const generateContainer = () => {
  const newDiv = document.createElement("div")
  return newDiv;
}

const fillArrContainer = (eltHTML, arr) => {
  eltHTML.innerHTML = "";
  for (let i=0; i<arr.length; i++) {
    eltHTML.innerHTML += `<span>${arr[i].toString()}</span>`;
  }  
}
 
function isOrdered (int1, int2) {
  return int1 <= int2;
}

const swapElements = (intArr, index) => {
  if (index < 0 || index >= intArr.length - 1) {
    console.error("Invalid index provided.")
    return;
  }
  if (isOrdered(intArr[index], intArr[index + 1])) {
    return
  } else {
    let temp = intArr[index];
    intArr[index] = intArr[index + 1];
    intArr[index + 1] = temp;
  }
}

const highlightCurrentEls = (eltHTML, index) => {
  const childElements = eltHTML.children;
  childElements[index].style.border = '2px dashed red';
  childElements[index + 1].style.border = '2px dashed red';
} 

const generateBtn = document.getElementById("generate-btn");
const startingArr = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");
let sortArr;
generateBtn.addEventListener("click", () => {
  const toRemove = arrayContainer.querySelectorAll(
    ':not([id="starting-array"])');
  toRemove.forEach(element => {element.remove();}); 
  console.log(startingArr.innerHTML);
  sortArr = generateArray();
  fillArrContainer(startingArr, sortArr);
});

const sortBtn = document.getElementById("sort-btn");
sortBtn.addEventListener("click", () => {
  let swaps;
  let firstIteration = true;
  
  do {
    swaps = false;
    for (let i = 0; i < sortArr.length - 1; i++) {
      
      // 1. VISUALIZE FIRST (Capture the state before the swap)
      if (firstIteration) {
        highlightCurrentEls(startingArr, i);
        firstIteration = false;
      } else {
        const myDiv = generateContainer();
        fillArrContainer(myDiv, sortArr);
        highlightCurrentEls(myDiv, i);
        arrayContainer.appendChild(myDiv);
      }

      // 2. THEN PERFORM THE LOGIC/SWAP
      if (isOrdered(sortArr[i], sortArr[i + 1])) {
        swaps ||= false;
      } else {
        swaps ||= true;
        swapElements(sortArr, i);
      }
    }
  } while (swaps);

  // Final sorted array display
  const myDiv = generateContainer();
  myDiv.id = "sorted-array";
  fillArrContainer(myDiv, sortArr);
  arrayContainer.appendChild(myDiv);
});