/** @format */

// TODO: Add title attribute to elements with class 'important'
document.querySelectorAll(".important").forEach((element) => {
  element.setAttribute("title", "This is an important item");
});

// TODO: Select all the img tags and loop through them. If they have no important class, turn their display property to none
document.querySelectorAll("img").forEach((img) => {
  if (!img.classList.contains("important")) {
    img.style.display = "none";
  }
});

// TODO: Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
document.querySelectorAll("p").forEach((paragraph) => {
  if (paragraph.className) {
    console.log(
      `Paragraph content: "${paragraph.textContent}" | Class: ${paragraph.className}`
    );
  } else {
    console.log(`Paragraph content: "${paragraph.textContent}"`);
  }

  // TODO: Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
  if (!paragraph.className) {
    paragraph.style.color = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
  }
});
