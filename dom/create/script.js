/** @format */

const learners = [
  "Manu",
  "Inna",
  "Arseniia",
  "Kamal",
  "Hugo",
  "Stéphan",
  "Martin",
  "Antoine",
  "Valentin",
  "Liana",
  "Jordan",
];

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return {
    color: `rgb(${r},${g},${b})`,
    brightness: r * 0.299 + g * 0.587 + b * 0.114,
  };
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

document.addEventListener("DOMContentLoaded", () => {
  const article = document.querySelector("article");
  const shuffledLearners = shuffleArray([...learners]);

  shuffledLearners.forEach((learner) => {
    const section = document.createElement("section");
    const paragraph = document.createElement("p");
    const { color, brightness } = getRandomColor();

    section.style.backgroundColor = color;
    paragraph.textContent = learner;
    paragraph.style.color = brightness < 128 ? "white" : "black";

    section.appendChild(paragraph);
    article.appendChild(section);
  });
});
