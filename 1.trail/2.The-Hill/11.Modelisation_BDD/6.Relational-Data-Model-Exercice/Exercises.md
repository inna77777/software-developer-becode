<!-- @format -->

# CRUD Operations

## 3.1. CREATE

```sql
-- Insert a customer
INSERT INTO Customers (first_name, last_name, email, phone_number)
VALUES ('Alice', 'Dupont', 'alice@example.com', '0123456789');

-- Insert transport
INSERT INTO Transport (name, available_seats, type, company_name)
VALUES ('Brussels Express', 55, 'bus', 'BusBelgium');

-- Insert accommodation
INSERT INTO Accommodations (name, category, city, country, contact_name, contact_phone)
VALUES ('Hotel Plopsa', 'hotel', 'De Panne', 'Belgium', 'Jean Plop', '+320123456');

-- Insert trip
INSERT INTO Trips (destination, price, available_spots, transport_id, accommodation_id)
VALUES ('Plopsaland', 250.00, 50, 1, 1);

-- Insert reservation
INSERT INTO Reservations (customer_id, trip_id, status, amount)
VALUES (1, 1, 'pending', 250.00);

-- Insert payment
INSERT INTO Payments (reservation_id, payment_method, amount)
VALUES (1, 'credit_card', 250.00);

```

## 3.1. READ

```sql
-- List all trips with details
SELECT T.trip_id, T.destination, T.price, A.name AS accommodation, Tr.name AS transport
FROM Trips T
JOIN Accommodations A ON T.accommodation_id = A.accommodation_id
JOIN Transport Tr ON T.transport_id = Tr.transport_id;

-- Display a client’s reservations and payment
SELECT C.first_name, C.last_name, R.status, P.amount AS payment_amount, P.payment_method
FROM Customers C
JOIN Reservations R ON C.customer_id = R.customer_id
LEFT JOIN Payments P ON R.reservation_id = P.reservation_id
WHERE C.customer_id = 1;

-- Available transport for destination
SELECT Tr.*
FROM Trips T
JOIN Transport Tr ON T.transport_id = Tr.transport_id
WHERE T.destination = 'Plopsaland';

-- View company services
SELECT DISTINCT company_name
FROM Transport;

```

## 3.1. UPDATE

```sql
-- Update customer info
UPDATE Customers SET first_name = 'Alicia' WHERE customer_id = 1;

-- Update reservation status
UPDATE Reservations SET status = 'confirmed' WHERE reservation_id = 1;

-- Update trip price
UPDATE Trips SET price = 260.00, available_spots = 45 WHERE trip_id = 1;

```

## 3.1. DELETE

```sql
-- Delete a reservation
DELETE FROM Reservations WHERE reservation_id = 1;

-- Delete payment method (assuming it's an ENUM value, not a separate table)

DELETE FROM Payments
WHERE payment_method = 'paypal'

-- Delete transport method (will also remove related trips if cascade is on)
DELETE FROM Transport WHERE transport_id = 1;

```

# SQL Questions

```sql
-- Exercise 1: Companies offering planes
SELECT DISTINCT company_name
FROM Transport
WHERE type = 'plane';

```

```sql
-- Exercise 2: Transports with their companies
SELECT name, type, company_name
FROM Transport;

```

```sql
-- Exercise 3: Transports with more than 200 seats
SELECT *
FROM Transport
WHERE available_seats > 200;

```

```sql
-- Exercise 4: Accommodations and main contact
SELECT name, contact_name, contact_phone
FROM Accommodations;

```

```sql
-- Exercise 5: Contacts in Switzerland
SELECT contact_name, contact_phone
FROM Accommodations
WHERE country = 'Switzerland';

```

```sql
-- Exercise 6: Create a trip to Belgium (Plopsaland)
INSERT INTO Trips (destination, price, available_spots, transport_id, accommodation_id)
VALUES ('Plopsaland', 150.00, 50, 1, 1);

```

```sql
-- Exercise 7: Add a client to this trip
-- Add client
INSERT INTO Customers (first_name, last_name, email)
VALUES ('Bob', 'Martin', 'bob@example.com');

-- Add reservation
INSERT INTO Reservations (customer_id, trip_id, status, amount)
VALUES (2, 1, 'confirmed', 150.00);

-- Add payment
INSERT INTO Payments (reservation_id, payment_method, amount)
VALUES (2, 'paypal', 150.00);

```
