function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divElem = document.querySelector("#controls");
const inputElem = document.querySelector("input");
const createBtn = divElem.querySelector("button");
const destroyBtn = divElem.querySelector("button:last-child");
const divBoxElem = document.querySelector("#boxes");

divBoxElem.style.display = "flex";
divBoxElem.style.flexWrap = "wrap";
divBoxElem.style.alignItems = "center";
divBoxElem.style.marginTop = "30px";

createBtn.addEventListener("click", () => {
  if (
    Number(inputElem.value.trim()) > Number(inputElem.max) ||
    Number(inputElem.value.trim()) < Number(inputElem.min)
  ) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(inputElem.value.trim());
  }
  inputElem.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  divBoxElem.innerHTML = "";
}

function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const div = `<div class="item" 
    style="display: block;
    margin-right: 30px;
    margin-bottom: 30px;
    background-color: ${getRandomHexColor()}; 
    width: ${size}px; 
    height: ${size}px;"></div>`;
    boxesArr.push(div);
  }
  divBoxElem.insertAdjacentHTML("beforeend", boxesArr.join(""));
}
