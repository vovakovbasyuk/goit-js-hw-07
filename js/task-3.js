const inputElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");

inputElem.addEventListener("input", onInputChange);
function onInputChange() {
  if (inputElem.value.trim() !== "") {
    spanElem.innerHTML = inputElem.value.trim();
  } else {
    spanElem.innerHTML = "Anonymous";
  }
}
