<!-- @format -->

# 6. Relational Model: Exercise

Use the **Conceptual Data Model (CDM)** previously created, along with its GitHub repository.

## 1. From CDM to LDM (Logical Data Model)

- Convert entities and associations into relational tables.
- Define primary keys (PK) and foreign keys (FK).
- Add integrity constraints (`NOT NULL`, `UNIQUE`, `CHECK`, etc.).

## 2. Write All Your Tables

- Create a `.sql` file containing the definition of all tables.

## 3. Add CRUD Operations

For each table in the relational model, implement the CRUD operations (Create, Read, Update, Delete) to manage the data.

### 3.1. Create Records (CREATE)

- Insert new clients, companies, accommodations, and transport methods.
- Add reservations by linking a client to a trip and a payment method.
- Register contacts related to accommodations.

### 3.2. Read Records (READ)

- Retrieve the list of trips with their details (price, accommodation, transport).
- Display a client’s reservations with the payment status.
- List available means of transport for a given destination.
- View information about a company and its related services.

### 3.3. Update Records (UPDATE)

- Modify a client’s information (name, first name, etc.).
- Update a reservation’s status (confirmed, cancelled, pending).
- Change a trip’s details (price, number of available seats).

### 3.4. Delete Records (DELETE)

- Delete a reservation (with cascade delete if needed).
- Remove an unused payment method.
- Delete a transport method that is no longer available.

> ⚠️ **Be mindful of integrity constraints!**  
> When deleting, make sure linked records don’t become orphaned, or plan cascade deletions using `ON DELETE CASCADE`.

---

## 4. Answer These SQL Questions

```sql
-- Exercise 1: Display all companies offering planes
-- 📌 Goal: Find companies that have at least one transport method of type Plane.

-- Exercise 2: List transports with their companies
-- 📌 Goal: Display all transports, including the name of the associated company.

-- Exercise 3: Find transports with more than 200 seats
-- 📌 Goal: Show all transports that have more than 200 seats (TotalSeats).

-- Exercise 4: Display accommodations and their main contact type
-- 📌 Goal: Link accommodations with their primary contact type.

-- Exercise 5: Find contacts for accommodations in Switzerland
-- 📌 Goal: Show contacts associated with accommodations located in Switzerland.

-- Exercise 6: Create a trip to Belgium (3 days in Plopsaland) with a limit of 50 seats
-- 📌 Goal: Create a trip in Belgium. Find the transport, accommodation, and contact.

-- Exercise 7: Add a client to this trip
-- 📌 Goal: Add several clients, payment, etc.

```



![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3F0dWx4a2l5djZwbnlkbmhpd3V3bHZ4b2VteDdiZHRicGdrMG5yZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9M5jK4GXmD5o1irGrF/giphy.gif)

