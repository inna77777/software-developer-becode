/** @format */

const newEventName = document.querySelector("#newEventName");
let newEventDates = document.querySelectorAll(".newEventDates");
const newEventAuthor = document.querySelector("#newEventAuthor");
const newEventDescription = document.querySelector("#newEventDescription");

document
  .getElementById("createEventBtn")
  .addEventListener("click", function () {
    const formHolder = document.querySelector(".createEventFormHolder");
    const button = document.getElementById("createEventBtn");

    if (
      formHolder.style.display === "none" ||
      formHolder.style.display === ""
    ) {
      formHolder.style.display = "flex"; // Show the form
      button.innerHTML = "&#8594; Close create form"; // Change button text
      button.classList.add("closeForm"); // Apply close form button style
    } else {
      formHolder.style.display = "none"; // Hide the form
      button.innerHTML = "&#8594; Create a new event"; // Reset button text
      button.classList.remove("closeForm"); // Remove close form style
    }
  });

// (fetch) POST new event BTN (SUBMIT html FORM)
document.querySelector("#newEventSubmit").addEventListener("click", (e) => {
  e.preventDefault();

  newEventDates = document.querySelectorAll(".newEventDatesInitial");

  // Condition: a name + at least 1 date
  if (newEventName.value && newEventDates.length) {
    const eventToAdd = {
      name: newEventName.value,
      author: newEventAuthor.value,
      description: newEventDescription.value,
      dates: [...newEventDates]
        .map((dateInput) => {
          if (!dateInput.value) {
            console.error("Date is missing or invalid.");
            return null; // Skip invalid date inputs
          }
          return dateInput.value; // Ensure valid date format is present
        })
        .filter(Boolean), // Remove any invalid date (null)
    };
    console.log("Event to be sent:", JSON.stringify(eventToAdd, null, 2));

    fetch("http://localhost:3000/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventToAdd),
    }).then(() => {
      console.log("new event POST");
      displayAllEvents();
      resetAllInputs();

      // Remove only the added date inputs after posting, keeping the first one
      const addedDateInputs = document.querySelectorAll(
        "#dateInputsContainer .newEventDatesInitial"
      );
      if (addedDateInputs.length > 1) {
        // Remove only the extra inputs, keeping the first one
        for (let i = 1; i < addedDateInputs.length; i++) {
          addedDateInputs[i].parentElement.remove(); // Remove the entire div containing the input
        }
      }
    });
  } else {
    alert("Please complete the required fields.");
  }
});

document.querySelector("#addDatesBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const divContainer = document.createElement("div");
  divContainer.classList.add("new-date-add");

  const newDateInput = document.createElement("input");
  newDateInput.type = "date";
  newDateInput.classList.add("newEventDatesInitial");
  divContainer.appendChild(newDateInput);

  const removeDateInputBtn = document.createElement("button");
  removeDateInputBtn.classList.add("deleteDateBtn");
  removeDateInputBtn.textContent = "x";
  removeDateInputBtn.addEventListener("click", () => divContainer.remove());
  divContainer.appendChild(removeDateInputBtn);

  document.querySelector("#dateInputsContainer").appendChild(divContainer);
});

async function postAttend(eventID, inputsUserSerie, inputName) {
  let resArray = [];
  let i = 0;

  await fetch(`http://localhost:3000/api/events/${eventID}`)
    .then((res) => res.json())
    .then((data) =>
      data.dates.forEach((elem) => {
        const newAttend = {
          date: elem.date,
          available: false, // Default to false
        };

        // Check if the green checkmark button exists inside the container
        if (inputsUserSerie[i].querySelector(".greenAv")) {
          newAttend.available = true;
        }

        resArray.push(newAttend);
        i += 1;
      })
    )
    .catch((err) => console.log("Error: ", err));

  console.log(resArray);

  fetch(`http://localhost:3000/api/events/${eventID}/attend`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: inputName, // User input
      dates: [...resArray],
    }),
  }).then(() => {
    console.log("Data sent: attendees POST");

    // Refresh only the events to show changes immediately
    displayAllEvents();
  });
}

// fetch api/events .then function createEventDOM() on each event in the fetch-data
function displayAllEvents() {
  document.querySelector("#allEventsContainer").innerHTML = "";

  fetch("http://localhost:3000/api/events")
    .then((res) => res.json())
    .then((data) => {
      let availabilitiesGridNumIndex = 0;
      data.forEach((event) => {
        createEventDOM(event, availabilitiesGridNumIndex);
        availabilitiesGridNumIndex += 1;
      });
    });
}

// Create DOM elements for an event (CONTAIN FETCHS: PATCH-event, DELETE-event, POST-add_dates, POST-attend)
function createEventDOM(event, availabilitiesGridNumIndex) {
  // ---- Users & Dates & Availabilities ( GRID ) ----

  const availabilitiesGrid = document.createElement("section");
  availabilitiesGrid.classList.add("bigGrid");
  availabilitiesGrid.id = `i${availabilitiesGridNumIndex}`;
  let indexGridColumns = 1;
  let indexGridRows = 1;

  const emptydivforgrid = document.createElement("div");
  emptydivforgrid.style.gridArea = "1 / 1";
  availabilitiesGrid.appendChild(emptydivforgrid);

  // Dates
  event.dates.forEach((elem) => {
    const dateDiv = document.createElement("h5");
    dateDiv.textContent = elem.date;
    availabilitiesGrid.appendChild(dateDiv);

    indexGridColumns += 1;

    // Availabilities
    let indexRowsAv = 2;

    elem.attendees.forEach((user) => {
      const userAvDiv = document.createElement("div");
      userAvDiv.classList.add("av");
      if (user.available === true) {
        userAvDiv.classList.add("greenAv");
        userAvDiv.textContent = "✔";
      } else if (user.available === false) {
        userAvDiv.classList.add("grayAv");
        userAvDiv.textContent = "✘"; // Gray checkmark for unavailable users
      }
      userAvDiv.style.gridColumn = indexGridColumns;
      userAvDiv.style.gridRow = indexRowsAv;
      availabilitiesGrid.appendChild(userAvDiv);
      indexRowsAv += 1;
    });
  });
  availabilitiesGrid.style.gridTemplateColumns = `repeat(${indexGridColumns}, 1fr)`;

  // Users
  event.dates[0].attendees.forEach((elem) => {
    const attendDiv = document.createElement("h6");
    attendDiv.textContent = elem.name;
    availabilitiesGrid.appendChild(attendDiv);
    indexGridRows += 1;
  });
  availabilitiesGrid.style.gridTemplateRows = `repeat(${indexGridRows}, 1fr)`;

  // ---- Users inputs (name & availabilities) ---- ( POST ATTENDEES )
  const inputName = document.createElement("input");
  inputName.placeholder = "User name";
  const sendBtn = document.createElement("button");
  sendBtn.classList.add("sendBtn");
  sendBtn.textContent = "+";
  sendBtn.addEventListener("click", () => {
    if (inputName.value) {
      postAttend(
        event.id,
        document.querySelectorAll(`#${availabilitiesGrid.id}>.inputsBtns`),
        inputName.value
      );
    }
  });

  const inputNameDiv = document.createElement("div");
  inputNameDiv.classList.add("sendBtnAndInputNameDiv");
  inputNameDiv.appendChild(inputName);
  inputNameDiv.appendChild(sendBtn);

  availabilitiesGrid.appendChild(inputNameDiv);

  event.dates.forEach((date) => {
    // Create the checkmark button
    const trueAvBtn = document.createElement("button");
    trueAvBtn.classList.add("avBtn", "grayAv"); // Initially gray
    trueAvBtn.textContent = "✔"; // Checkmark

    // Handle the click event on the checkmark
    trueAvBtn.addEventListener("click", () => {
      // If the button is not green, turn it green
      if (!trueAvBtn.classList.contains("greenAv")) {
        trueAvBtn.classList.add("greenAv");
        trueAvBtn.classList.remove("grayAv"); // Remove gray when clicked
        // Send true to the backend, indicating availability
        sendAvailabilityToBackend(true);
      } else {
        // If it's already green, return it to gray (for toggling)
        trueAvBtn.classList.add("grayAv");
        trueAvBtn.classList.remove("greenAv");
        // Send false to the backend, indicating unavailability
        sendAvailabilityToBackend(false);
      }
    });

    // Container for the button
    const btnsCont = document.createElement("div");
    btnsCont.classList.add("inputsBtns");

    // Append button to the container
    btnsCont.appendChild(trueAvBtn);

    // Append the container to your grid or DOM
    availabilitiesGrid.appendChild(btnsCont);
  });

  // Function to send availability status to the backend
  function sendAvailabilityToBackend(isAvailable) {
    // Replace this with the actual logic to send data to your backend
    console.log(`User is available: ${isAvailable}`);
    // Example: You might send a POST request like this:
    // fetch('/api/updateAvailability', {
    //   method: 'POST',
    //   body: JSON.stringify({ available: isAvailable }),
    //   headers: { 'Content-Type': 'application/json' }
    // });
  }

  // ---- Event informations (title & author & description & BTNS) ----
  const eventTitle = document.createElement("h3");
  eventTitle.classList.add("eventTitle");
  eventTitle.textContent = `${event.name} by ${event.author}`;

  const eventDescription = document.createElement("p");
  eventDescription.textContent = event.description;

  // (fetch) PATCH event BTN (Modify Btn)
  // const modifyEventBtn = document.createElement("button");
  // modifyEventBtn.classList.add("modifyEventBtn");
  // modifyEventBtn.textContent = "Modify";
  const modifyEventBtn = document.createElement("i");
  modifyEventBtn.classList.add("fa-solid", "fa-pencil", "modifyEventBtn");

  async function createModifyModal(event) {
    let updatedData;
    try {
      console.log("Event ID:", event.id); // Check if the event ID is available

      // Pre-fill the modal with event details
      document.querySelector("#modifyEventName").value = event.name || "";
      document.querySelector("#modifyEventAuthor").value = event.author || "";
      document.querySelector("#modifyEventDescription").value =
        event.description || "";

      // Fetch the container for date inputs
      const dateInputsContainer = document.querySelector(
        "#modifyEventDateInputsContainer"
      );
      const datesContainer = document.createElement("div");
      datesContainer.classList.add("datesContainer");

      // Clear the previous date inputs
      dateInputsContainer.innerHTML = "";

      // Add each existing date to the modal as an input field (without close button)
      if (Array.isArray(event.dates) && event.dates.length > 0) {
        event.dates.forEach((dateObj) => {
          try {
            const dateDiv = document.createElement("div");
            dateDiv.classList.add("date-input-container");
            datesContainer.appendChild(dateDiv);

            const dateInput = document.createElement("input");
            dateInput.type = "date";

            const date = new Date(dateObj.date).toISOString().split("T")[0]; // Converts to YYYY-MM-DD
            dateInput.value = date;
            dateInput.disabled = true; // Disable the input
            dateDiv.appendChild(dateInput);

            dateInputsContainer.appendChild(datesContainer);
          } catch (error) {
            console.error(
              "Error formatting date or adding to modal:",
              error,
              dateObj
            );
          }
        });
      }

      // Event listener for adding a new date input (with close button)
      const addDateBtn = document.querySelector("#addDateToModifyEventBtn");
      addDateBtn.addEventListener("click", () => {
        try {
          const newDateDiv = document.createElement("div");
          newDateDiv.classList.add("date-input-container");

          const newDateInput = document.createElement("input");
          newDateInput.type = "date";
          newDateInput.classList.add("newEventDates");
          newDateDiv.appendChild(newDateInput);

          const removeDateInputBtn = document.createElement("button");
          removeDateInputBtn.classList.add("deleteDateBtn");
          removeDateInputBtn.textContent = "x";
          removeDateInputBtn.addEventListener("click", () =>
            newDateDiv.remove()
          );
          newDateDiv.appendChild(removeDateInputBtn);

          dateInputsContainer.appendChild(newDateDiv);
        } catch (error) {
          console.error("Error adding new date input:", error);
        }
      });

      // Handle the form submission to save changes
      const modifyEventForm = document.querySelector("#modifyEventForm");
      modifyEventForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
          // Get updated event details
          const updatedEvent = {
            name: document.querySelector("#modifyEventName").value,
            author: document.querySelector("#modifyEventAuthor").value,
            description: document.querySelector("#modifyEventDescription")
              .value,
          };

          // Send updated event to the server (PATCH request)
          fetch(`http://localhost:3000/api/events/${event.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedEvent),
          })
            .then(async (response) => {
              if (!response.ok) {
                throw new Error(
                  `Failed to update event. Status: ${response.status}`
                );
              }

              postAdd_Dates((await response.json()).id);
            })
            .catch((error) => {
              console.error("Error updating event:", error);
            });
        } catch (error) {
          console.error("Error handling form submission:", error);
        }
      });
      // Display the modal
      document.querySelector("#modifyEventModal").style.display = "block";

      // Close modal when clicking on the "×" close button
      document.querySelector(".close").addEventListener("click", () => {
        document.querySelector("#modifyEventModal").style.display = "none";
      });
    } catch (error) {
      console.error("Error in createModifyModal function:", error);
    }
  }

  // Function to add new dates to the event (via POST request)
  function postAdd_Dates(eventID) {
    console.log("im in the post dates ");

    try {
      console.log(eventID);

      let resArray = [];
      const newEventDates = document.querySelectorAll(".newEventDates");

      // Loop through each new date input and only push non-empty values
      newEventDates.forEach((date) => {
        const dateValue = date.value.trim(); // Remove leading/trailing spaces
        if (dateValue) {
          // Only push if the value is not an empty string
          resArray.push(dateValue);
        }
      });

      console.log("new dates ", resArray);

      // Ensure the new dates are not duplicates of existing ones
      const updatedDates = [...resArray];
      const uniqueDates = Array.from(new Set(updatedDates)); // Remove duplicates

      // Send new dates to the server
      fetch(`http://localhost:3000/api/events/${eventID}/add_dates`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dates: uniqueDates,
        }),
      })
        .then(async (res) => {
          console.log("New dates added");
          closeModalAndUpdateUI(await res.json());
        })
        .catch((error) => {
          console.error("Error adding dates:", error);
        });
    } catch (error) {
      console.error("Error in postAdd_Dates function:", error);
    }
  }
  function closeModalAndUpdateUI(updatedEventData) {
    document.querySelector("#modifyEventModal").style.display = "none";
    updateEventUI(updatedEventData); // Update UI for this specific event
    displayAllEvents(); // Refresh all events
    resetAllInputs();
  }

  // Modify the button click event to open the modify modal and show event data
  modifyEventBtn.addEventListener("click", () => {
    createModifyModal(event);
  });
  function updateEventUI(updatedEvent) {
    console.log("Updating UI with event:", updatedEvent); // Debugging line

    // Find the correct event elements by their ID or other attributes
    const eventElement = document.querySelector(`#event-${updatedEvent.id}`); // Make sure event ID is unique

    if (eventElement) {
      // Update event name, description, and dates
      const eventNameElement = eventElement.querySelector(".eventName");
      const eventAuthorElement = eventElement.querySelector(".eventAuthor");
      const eventDescriptionElement =
        eventElement.querySelector(".eventDescription");
      const eventDatesContainer = eventElement.querySelector(
        ".eventDatesContainer"
      );

      if (eventNameElement)
        eventNameElement.textContent = updatedEvent.name || "No name available";
      if (eventAuthorElement)
        eventAuthorElement.textContent =
          updatedEvent.author || "No author available";
      if (eventDescriptionElement)
        eventDescriptionElement.textContent =
          updatedEvent.description || "No description available";

      if (eventDatesContainer) {
        eventDatesContainer.innerHTML = ""; // Clear previous dates

        if (
          Array.isArray(updatedEvent.dates) &&
          updatedEvent.dates.length > 0
        ) {
          updatedEvent.dates.forEach((date) => {
            const dateDiv = document.createElement("div");
            dateDiv.classList.add("date-item");

            const dateText = document.createElement("span");
            dateText.textContent = new Date(date).toLocaleDateString();
            dateDiv.appendChild(dateText);

            eventDatesContainer.appendChild(dateDiv);
          });
        } else {
          const noDatesMessage = document.createElement("span");
          noDatesMessage.textContent = "No dates available.";
          eventDatesContainer.appendChild(noDatesMessage);
        }
      }
    }
  }
  // (fetch) DELETE event BTN (Delete Btn)
  // const deleteEventBtn = document.createElement("button");
  // deleteEventBtn.classList.add("deleteEventBtn");
  // deleteEventBtn.textContent = "Delete";
  const deleteEventBtn = document.createElement("i");
  deleteEventBtn.classList.add("fa-solid", "fa-trash", "deleteEventBtn");
  deleteEventBtn.addEventListener("click", () => {
    // Show the modal
    eventToDeleteName.textContent = event.name;
    deleteEventModal.style.display = "block";

    // Remove previous event listeners
    confirmDeleteBtn.onclick = null;
    cancelDeleteBtn.onclick = null;

    // Handle confirmation
    confirmDeleteBtn.onclick = () => {
      fetch(`http://localhost:3000/api/events/${event.id}`, {
        method: "DELETE",
      }).then(() => {
        displayAllEvents();
        deleteEventModal.style.display = "none";
      });
    };

    // Handle cancellation
    cancelDeleteBtn.onclick = () => {
      deleteEventModal.style.display = "none";
    };
  });

  // Close modal when clicking on the "×" close button
  document.querySelector(".closeDelete").addEventListener("click", () => {
    deleteEventModal.style.display = "none";
  });

  const eventHeader = document.createElement("div");
  eventHeader.classList.add("event-header");
  const eventBtnsDiv = document.createElement("div");
  eventBtnsDiv.classList.add("event-buttons");

  eventBtnsDiv.appendChild(modifyEventBtn);
  eventBtnsDiv.appendChild(deleteEventBtn);

  const btnsNameAuthorContainer = document.createElement("section");
  btnsNameAuthorContainer.classList.add("btnsNameAuthorContainer");
  eventHeader.appendChild(eventTitle);
  eventHeader.appendChild(eventBtnsDiv);
  const infosContainer = document.createElement("section");
  infosContainer.appendChild(btnsNameAuthorContainer);
  infosContainer.appendChild(eventDescription);

  // ---- Main Container ----
  const eventContainer = document.createElement("section");
  eventContainer.classList.add("eventContainer");
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const showAvailabilities = document.createElement("button");
  showAvailabilities.classList.add("show-close-availabilities");
  showAvailabilities.textContent = "Show Availabilities"; // Initial text
  function showGrid() {
    // Show the availabilities grid
    availabilitiesGrid.style.display = "grid"; // Display the grid

    // Change button text to "Close Availabilities"
    showAvailabilities.textContent = "Close Availabilities";

    // Remove the event listener for showing and add one for closing
    showAvailabilities.removeEventListener("click", showGrid);
    showAvailabilities.addEventListener("click", closeGrid);
  }

  // Function to close the grid
  function closeGrid() {
    // Hide the availabilities grid
    availabilitiesGrid.style.display = "none";

    // Change button text back to "Show Availabilities"
    showAvailabilities.textContent = "Show Availabilities";

    // Remove the event listener for closing and add one for showing
    showAvailabilities.removeEventListener("click", closeGrid);
    showAvailabilities.addEventListener("click", showGrid);
  }

  // Event listener for the "Show Availabilities" button
  showAvailabilities.addEventListener("click", showGrid);
  eventContainer.appendChild(showAvailabilities);
  eventContainer.appendChild(eventHeader);
  eventContainer.appendChild(infosContainer);

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  eventContainer.appendChild(showAvailabilities);
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  eventContainer.appendChild(availabilitiesGrid);

  document.querySelector("#allEventsContainer").appendChild(eventContainer);
}

function resetAllInputs() {
  newEventDates = document.querySelectorAll(".newEventDates");
  newEventDates.forEach((dateInput) => (dateInput.value = ""));

  newEventName.value = "";
  newEventAuthor.value = "";
  newEventDescription.value = "";
}

// ------------------------------------------------
//                     APP
// ------------------------------------------------
// display all events at page opening
displayAllEvents();
// reset all users inputs at page opening
resetAllInputs();
