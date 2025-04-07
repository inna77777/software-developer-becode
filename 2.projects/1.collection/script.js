/** @format */

import collection from "./collection.js";

let films = [...collection]; 
function displayCollection(films) {
  const sectionFilms = document.getElementById("films-collection");
  sectionFilms.innerHTML = "";

  films.forEach((film, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = film.image;
    img.alt = "film-image";

    const textContent = document.createElement("div");
    textContent.classList.add("text-content");

    const upperText = document.createElement("div");

    const genreDiv = document.createElement("div");
    genreDiv.classList.add("genre");
    film.genre.forEach((genre) => {
      const genreSpan = document.createElement("span");
      genreSpan.textContent = genre;
      genreDiv.appendChild(genreSpan);
    });

    const title = document.createElement("h2");
    title.textContent = film.name;

    const director = document.createElement("h3");
    director.textContent = film.director;

    const releaseDate = document.createElement("p");
    releaseDate.classList.add("date");
    releaseDate.textContent = film.releaseDate;

    const cast = document.createElement("p");
    cast.classList.add("cast");
    cast.textContent = film.cast;

    upperText.append(genreDiv, title, director, releaseDate, cast);

    const lowerText = document.createElement("div");

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = film.description;

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("card-actions");

    const trailerLink = document.createElement("a");
    trailerLink.href = film.trailer;
    trailerLink.target = "_blank";

    const youtubeIcon = document.createElement("i");
    youtubeIcon.classList.add("fa-brands", "fa-youtube");
    trailerLink.appendChild(youtubeIcon);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
      films.splice(index, 1);
      displayCollection(films);
    });

    actionsDiv.append(trailerLink, deleteButton);
    lowerText.append(description, actionsDiv);

    textContent.append(upperText, lowerText);
    card.append(img, textContent);
    sectionFilms.appendChild(card);
  });
}

function setupSorting() {
  const genreSelect = document.getElementById("genre-filter");

  const genres = new Set();
  collection.forEach((film) => film.genre.forEach((g) => genres.add(g)));

  genreSelect.innerHTML = `<option value="all">All</option>`;
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });

  genreSelect.addEventListener("change", (event) => {
    const selectedGenre = event.target.value;
    if (selectedGenre === "all") {
      films = [...collection];
    } else {
      films = collection.filter((film) => film.genre.includes(selectedGenre));
    }
    displayCollection(films);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayCollection(films);
  setupSorting();
});



// import collection from "./collection.js";
// console.log(collection);

// function displayCollection(films) {
//   const sectionFilms = document.getElementById("films-collection");
//   const filmCards = films.map(filmCard).join("");
//   sectionFilms.innerHTML = filmCards;
// }

// const filmCard = (film) => {
//   const genre = film.genre.map((genre) => `<span>${genre}</span>`).join("");
//   return `<div class="card">
//           <img src="${film.image}" alt="film-image" />
//           <div class="text-content">
//             <div>
//                 <div class="genre">${genre}</div>
//                 <h2>${film.name}</h2>
//                 <h3>${film.director}</h3>
//                 <p class="date">${film.releaseDate}</p>
//                 <p class="cast">${film.cast}</p>
//             </div>
//             <div>
//                <p class="description">${film.description}</p>
//                <a href="${film.trailer}" target="_blank"><i class="fa-brands fa-youtube"></i></a>
//             </div>
//           </div>
//         </div>`;
// };

// displayCollection(collection);
