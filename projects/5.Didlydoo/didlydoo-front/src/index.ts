// /** @format */
// ! this is code from angular app

// import { Component, OnInit } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { FormsModule } from "@angular/forms";
// import { MatButtonModule } from "@angular/material/button";
// import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
// import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

// import { EventService } from "../../services/event.service";
// import { HttpHeaders } from "@angular/common/http";

// // event.model.ts
// export interface Attendee {
//   name: string;
//   available: boolean;
// }

// export interface DateAvailability {
//   date: string; // The date of the event
//   attendees: Attendee[]; // List of attendees for this date
// }

// export interface Event {
//   id: string;
//   name: string;
//   author: string;
//   description: string;
//   dates: DateAvailability[]; // Dates for the event with attendees for each date
// }

// @Component({
//   selector: "app-event",
//   standalone: true,
//   imports: [CommonModule, FormsModule, MatButtonModule, FontAwesomeModule],
//   templateUrl: "./event.component.html",
//   styleUrls: ["./event.component.css"],
// })
// export class EventComponent implements OnInit {
//   username: string = "";
//   availabilitiesMap: { [eventId: string]: boolean[] } = {};

//   faPencil = faPencil;
//   faTrash = faTrash;
//   showAvailabilities = false;
//   showDateInputForEdit: boolean = false;

//   selectedAvailabilityEventId: string | null = null;

//   events: Event[] = [];
//   allAttendees: { name: string; available: boolean }[] = [];

//   newEvent: Event = {
//     id: "",
//     name: "",
//     author: "",
//     description: "",
//     dates: [],
//   };

//   eventToEdit: Event = {
//     id: "",
//     name: "",
//     author: "",
//     description: "",
//     dates: [],
//   };

//   existingDates: DateAvailability[] = [];
//   newDates: DateAvailability[] = [];

//   isFormVisible = false;
//   modalAction: "edit" | "delete" = "edit";
//   initialDate: string = "";

//   constructor(private eventService: EventService) {}

//   ngOnInit() {
//     this.fetchEvents();
//     this.events.forEach((event) => {
//       if (!this.availabilitiesMap[event.id]) {
//         this.availabilitiesMap[event.id] = event.dates.map(() => false);
//       }
//     });
//     console.log("Initial availabilitiesMap:", this.availabilitiesMap); // Debugging line
//   }

//   fetchEvents() {
//     this.eventService.getEvents().subscribe({
//       next: (events) => {
//         this.events = events.map((event) => ({
//           ...event,
//           dates: event.dates.map((date) => ({
//             ...date,
//             attendees: date.attendees.map((attendee) => ({
//               ...attendee,
//               // Remove the available: false initialization and leave it as is from the backend
//             })),
//           })),
//         }));

//         // Initialize availabilitiesMap without changing the availability status
//         this.events.forEach((event) => {
//           if (!this.availabilitiesMap[event.id]) {
//             this.availabilitiesMap[event.id] = event.dates.map(() => false); // False by default if no prior data
//           }
//         });

//         console.log("Fetched events:", this.events);
//         console.log("Updated availabilitiesMap:", this.availabilitiesMap);
//       },
//       error: (err) => {
//         console.error("Error fetching events:", err);
//       },
//     });
//   }

//   getAttendeesForEvent(event: Event): Attendee[] {
//     const attendeesSet = new Set<string>(); // Set to store unique attendee names

//     event.dates.forEach((date) => {
//       date.attendees.forEach((attendee) => {
//         attendeesSet.add(attendee.name);
//       });
//     });

//     return Array.from(attendeesSet).map((name) => ({
//       name,
//       available: false, // Default availability
//     }));
//   }

//   checkAttendance(
//     event: Event,
//     date: DateAvailability,
//     attendee: { name: string }
//   ): string {
//     const attendeeStatus = date.attendees.find((a) => a.name === attendee.name);
//     return attendeeStatus && attendeeStatus.available ? "✔" : "✘";
//   }

//   toggleForm() {
//     this.isFormVisible = !this.isFormVisible;
//   }

//   submitEvent() {
//     console.log("Form submitted");

//     // Construct a new event object to prevent modifying the original
//     const eventToSubmit = { ...this.newEvent };
//     eventToSubmit.dates = [...this.newDates]; // Add the new dynamic dates

//     // If initial date is provided, add it to the front of the dates array as DateAvailability
//     if (this.initialDate) {
//       eventToSubmit.dates.unshift({
//         date: this.initialDate,
//         attendees: [],
//       });
//     }

//     // Validation for required fields
//     if (
//       !eventToSubmit.name ||
//       !eventToSubmit.author ||
//       !eventToSubmit.description ||
//       eventToSubmit.dates.length === 0
//     ) {
//       console.error("Missing required fields:", eventToSubmit);
//       return;
//     }

//     // Ensure the dates are in the correct format (as objects with date and attendees)
//     eventToSubmit.dates = eventToSubmit.dates.map((date: DateAvailability) => ({
//       date: date.date,
//       attendees: date.attendees || [], // Ensure there are no null/undefined attendees
//     }));

//     // Validation for event name and at least one valid date
//     const newEventDates = document.querySelectorAll(
//       ".newEventDatesInitial"
//     ) as NodeListOf<HTMLInputElement>;

//     if (eventToSubmit.name && eventToSubmit.dates.length) {
//       // Create the event object
//       const eventToAdd = {
//         name: eventToSubmit.name,
//         author: eventToSubmit.author,
//         description: eventToSubmit.description,
//         dates: [...eventToSubmit.dates]
//           .map((dateInput) => {
//             if (!dateInput.date) {
//               console.error("Date is missing or invalid.");
//               return null;
//             }
//             return dateInput.date;
//           })
//           .filter(Boolean),
//       };

//       console.log("Event to be sent:", JSON.stringify(eventToAdd, null, 2));

//       // Prepare headers, add authorization if necessary
//       const headers = new HttpHeaders({
//         "Content-Type": "application/json",
//       });

//       // Call the EventService to create the event
//       this.eventService.createEvent(eventToAdd, { headers }).subscribe({
//         next: () => {
//           console.log("Event created successfully");
//           this.fetchEvents(); // Refresh events list after creating the event
//           this.resetForm(); // Reset the form to its initial state
//           this.toggleForm(); // Optionally hide the form
//         },
//         error: (err) => {
//           console.error("Error creating event:", err);
//           alert("Failed to create event. Please try again.");
//         },
//       });
//     } else {
//       console.error("Please complete the required fields.");
//       alert("Please complete the required fields.");
//     }
//   }

//   // updateEventDetails() {
//   //   if (
//   //     !this.eventToEdit.name ||
//   //     !this.eventToEdit.author ||
//   //     !this.eventToEdit.description
//   //   ) {
//   //     alert('Please fill in all required fields.');
//   //     return;
//   //   }

//   //   // Create a minimal update payload (no date changes)
//   //   const updatedEvent = {
//   //     name: this.eventToEdit.name,
//   //     author: this.eventToEdit.author,
//   //     description: this.eventToEdit.description,
//   //   };

//   //   // Set the headers
//   //   const headers = new HttpHeaders({
//   //     'Content-Type': 'application/json',
//   //   });

//   //   this.eventService
//   //     .updateEvent(this.eventToEdit.id, updatedEvent, { headers })
//   //     .subscribe({
//   //       next: () => {
//   //         console.log('Event updated successfully');
//   //         this.fetchEvents();
//   //         this.closeModal();
//   //       },
//   //       error: (err) => {
//   //         console.error('Error updating event:', err);
//   //         alert('Failed to update event. Please try again.');
//   //       },
//   //     });
//   // }
//   updateEventDetails() {
//     if (
//       !this.eventToEdit.name ||
//       !this.eventToEdit.author ||
//       !this.eventToEdit.description
//     ) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     // Create a minimal update payload (no date changes)
//     const updatedEvent = {
//       name: this.eventToEdit.name,
//       author: this.eventToEdit.author,
//       description: this.eventToEdit.description,
//     };

//     // Get the existing event dates (from the form) and new added dates
//     const existingDates = this.eventToEdit.dates.map((date) => date.date);
//     const newAddedDates = this.newDates.filter(
//       (newDate) => newDate.date && !existingDates.includes(newDate.date)
//     );

//     // Remove duplicates from new dates
//     const uniqueDates = Array.from(
//       new Set(newAddedDates.map((date) => date.date))
//     );

//     // Set the headers
//     const headers = new HttpHeaders({
//       "Content-Type": "application/json",
//     });

//     // Update event details with a PATCH request
//     this.eventService
//       .updateEvent(this.eventToEdit.id, updatedEvent, { headers })
//       .subscribe({
//         next: () => {
//           console.log("Event updated successfully");

//           // If there are new dates, send them via POST request
//           if (uniqueDates.length > 0) {
//             this.eventService
//               .addDatesToEvent(this.eventToEdit.id, uniqueDates, { headers })
//               .subscribe({
//                 next: () => {
//                   console.log("New dates added successfully");
//                   this.fetchEvents();
//                   this.closeModal();
//                 },
//                 error: (err) => {
//                   console.error("Error adding new dates:", err);
//                   alert("Failed to add new dates. Please try again.");
//                 },
//               });
//           } else {
//             this.fetchEvents();
//             this.closeModal();
//           }
//         },
//         error: (err) => {
//           console.error("Error updating event:", err);
//           alert("Failed to update event. Please try again.");
//         },
//       });
//   }

//   addNewDate(date: string) {
//     if (date) {
//       const newDate: DateAvailability = {
//         date: date,
//         attendees: [],
//       };
//       this.newDates.push(newDate);
//       this.initialDate = ""; // Clear the initial date input after adding it
//     }
//   }

//   removeNewDate(index: number) {
//     this.newDates.splice(index, 1);
//   }

//   editEvent(event: Event) {
//     // Clone the event deeply to avoid shared references
//     this.eventToEdit = {
//       ...event,
//       dates: event.dates.map((date) => ({
//         ...date,
//         attendees: [...date.attendees], // Ensure attendees are cloned and not shared
//       })),
//     };
//     this.modalAction = "edit";
//     this.openModal();
//   }

//   deleteEvent(event: Event) {
//     this.eventToEdit = { ...event };
//     this.modalAction = "delete";
//     this.openModal();
//   }

//   confirmDelete() {
//     this.eventService.deleteEvent(this.eventToEdit.id).subscribe({
//       next: () => {
//         this.fetchEvents();
//         this.closeModal();
//       },
//       error: (err) => console.error("Error deleting event:", err),
//     });
//   }

//   openModal() {
//     const modal = document.getElementById("eventModal");
//     if (modal) modal.style.display = "block";
//   }

//   closeModal() {
//     const modal = document.getElementById("eventModal");
//     if (modal) modal.style.display = "none";
//     this.resetForm();
//   }

//   resetForm() {
//     this.newEvent = {
//       id: "",
//       name: "",
//       author: "",
//       description: "",
//       dates: [],
//     };
//     this.newDates = [];
//   }

//   toggleAvailabilities(eventId: string) {
//     if (this.selectedAvailabilityEventId === eventId) {
//       this.selectedAvailabilityEventId = null; // Close it
//     } else {
//       this.selectedAvailabilityEventId = eventId; // Open the selected one
//     }
//   }
//   toggleAvailability(eventId: string, dateIndex: number): void {
//     // Ensure availabilityMap is initialized for the eventId if not already
//     if (!this.availabilitiesMap[eventId]) {
//       this.availabilitiesMap[eventId] = [];
//     }

//     // Toggle availability for the specific date
//     this.availabilitiesMap[eventId][dateIndex] =
//       !this.availabilitiesMap[eventId][dateIndex];

//     // Log the updated availability
//     const status = this.availabilitiesMap[eventId][dateIndex]
//       ? "✅ Available"
//       : "❌ Not Available";
//     console.log(
//       `Toggled: Event ${eventId}, Date Index ${dateIndex} → ${status}`
//     );
//     console.log("Updated availabilitiesMap:", this.availabilitiesMap); // Debugging line
//   }

//   isAvailable(eventId: string, index: number): boolean {
//     // Ensure the availability state is false if it hasn't been toggled
//     return this.availabilitiesMap[eventId]?.[index] ?? false;
//   }

//   sendAttendance(event: Event): void {
//     if (!this.username.trim()) return;

//     // Ensure the availability for the event is being fetched correctly
//     const availabilityArray = this.availabilitiesMap[event.id];

//     if (!availabilityArray) {
//       console.error("No availability data found for the event.");
//       return;
//     }

//     // Log the availability array being sent
//     console.log("Sending attendance for event:", event.id);
//     console.log("Availability Array:", availabilityArray);
//     const headers = new HttpHeaders({
//       "Content-Type": "application/json",
//     });

//     this.eventService
//       .postAttend(event.id, this.username, event.dates, availabilityArray, {
//         headers,
//       })
//       .subscribe({
//         next: () => {
//           console.log("Attendance sent!");
//           this.username = ""; // Reset username
//           // Reset the availability for the event (all false)
//           this.availabilitiesMap[event.id] = event.dates.map(() => false);
//         },
//         error: (err) => {
//           console.error("Error sending attendance:", err);
//         },
//       });
//   }
// }
