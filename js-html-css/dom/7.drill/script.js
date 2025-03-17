/** @format */

const ul = document.querySelector("ul");
const ulChildren = Array.from(ul.children);

ulChildren.forEach((element) => {
  if (element.textContent.includes("Fast and Furious")) {
    element.classList.add("important");
    ul.prepend(element);
  }
});

const seen = new Set();
ulChildren.forEach((element) => {
  if (seen.has(element.textContent)) {
    element.remove();
  } else {
    seen.add(element.textContent);
  }
});

ul.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("important")) {
      alert(
        "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
      );
    } else {
      alert(item.textContent);
    }
  });
});

function randomSort() {
  const items = Array.from(ul.children);
  const fastAndFurious = ul.querySelector(".important");

  const shuffled = items
    .filter((item) => item !== fastAndFurious)
    .sort(() => Math.random() - 0.5);

  ul.innerHTML = "";
  ul.appendChild(fastAndFurious);
  shuffled.forEach((item) => ul.appendChild(item));
}

function cloneFastAndFurious() {
  const fastAndFurious = ul.querySelector(".important");
  if (fastAndFurious) {
    const clone = fastAndFurious.cloneNode(true);
    ul.prepend(clone);
  }
}

document.body.addEventListener("keyup", (event) => {
  if (event.key === "r") {
    randomSort();
  } else if (event.key === "d") {
    cloneFastAndFurious();
  }
});

const div = document.createElement("div");
const select = document.createElement("select");

const option1 = document.createElement("option");
option1.text = "All franchises";
option1.value = "all";
option1.selected = true;

const option2 = document.createElement("option");
option2.text = "Important franchises";
option2.value = "important";

select.appendChild(option1);
select.appendChild(option2);
div.appendChild(select);
ul.parentNode.insertBefore(div, ul);

function filterFranchises() {
  const selectedOption = select.value;
  ul.querySelectorAll("li").forEach((item) => {
    if (selectedOption === "important") {
      item.style.display = item.classList.contains("important")
        ? "list-item"
        : "none";
    } else {
      item.style.display = "list-item";
    }
  });
}

filterFranchises();
select.addEventListener("change", filterFranchises);
