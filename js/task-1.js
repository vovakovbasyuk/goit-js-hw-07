const ulElem = document.getElementById("categories");
const liElem = document.querySelectorAll(".item");

console.log(`Number of categories: ${liElem.length}`);
liElem.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.querySelectorAll("ul > li").length}`);
});
