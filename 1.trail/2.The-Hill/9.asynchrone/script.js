/** @format */

// Load JSON Rules
document.getElementById("load-rules").addEventListener("click", () => {
  fetch("rules.json")
    .then((response) => response.json())
    .then((data) => {
      const list = document.getElementById("rules-list");
      list.innerHTML = ""; // Clear existing list
      data.forEach((rule) => {
        const li = document.createElement("li");
        li.textContent = rule;
        list.appendChild(li);
      });
    })
    .catch((error) => console.error("Error loading JSON:", error));
});

// Fetch Data from Agify API
document.getElementById("fetch-age").addEventListener("click", () => {
  const name = document.getElementById("name-input").value;
  const country = document.getElementById("country-select").value;
  if (!name) return alert("Please enter a name.");

  const cacheKey = country ? `${name}-${country}` : name;
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    displayResult(JSON.parse(cachedData));
    return;
  }

  let url = `https://api.agify.io?name=${name}`;
  if (country) url += `&country_id=${country}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem(cacheKey, JSON.stringify(data));
      displayResult(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function displayResult(data) {
  const resultDiv = document.createElement("div");
  resultDiv.textContent = `Name: ${data.name}, Age: ${data.age}, Count: ${data.count}`;
  document.getElementById("results").appendChild(resultDiv);
}
