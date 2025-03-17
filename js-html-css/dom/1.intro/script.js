/** @format */

document.addEventListener("DOMContentLoaded", () => {
  console.log(document.title);
  document.title = "Modifying the DOM";
  document.body.style.backgroundColor = "#FF69B4";
  function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  document.body.style.backgroundColor = getRandomColor();
});
