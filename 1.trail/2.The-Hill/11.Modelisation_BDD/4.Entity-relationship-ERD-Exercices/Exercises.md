# Database Schema

## Customers
- `customer_id` (Primary Key)
- `first_name`
- `last_name`
- `email`
- `phone_number`

## Trips
- `trip_id` (Primary Key)
- `destination`
- `price`
- `available_spots`
- `current_bookings`
- `transport_id` (Foreign Key referencing **Transport**)
- `accommodation_id` (Foreign Key referencing **Accommodations**)

## Reservations
- `reservation_id` (Primary Key)
- `customer_id` (Foreign Key referencing **Customers**)
- `trip_id` (Foreign Key referencing **Trips**)
- `status` (ENUM: `'pending'`, `'confirmed'`, `'canceled'`)
- `amount`
- `reservation_date`

## Payments
- `payment_id` (Primary Key)
- `reservation_id` (Foreign Key referencing **Reservations**)
- `payment_method` (ENUM: `'credit_card'`, `'debit_card'`, `'paypal'`, etc.)
- `payment_date`
- `amount`

## Transport
- `transport_id` (Primary Key)
- `name`
- `available_seats`
- `type` (ENUM: `'bus'`, `'plane'`, `'train'`)
- `company_name`

## Accommodations
- `accommodation_id` (Primary Key)
- `name`
- `category` (ENUM: `'hotel'`, `'hostel'`, `'apartment'`, etc.)
- `city`
- `country`
- `contact_name`
- `contact_phone`

---

## Relationships

- A **Customer** can have multiple **Reservations**.
- A **Trip** can have multiple **Reservations** but is associated with **one Transport** and **one Accommodation**.
- Each **Reservation** is linked to **one Payment**.
- Each **Transport** can be associated with **multiple Trips**.
- Each **Accommodation** can be associated with **multiple Trips**.



## [DB Diagram](https://dbdiagram.io/d/67fa915c4f7afba1845ac8f0)


