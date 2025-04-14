CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(20)
);

CREATE TABLE Transport (
    transport_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    available_seats INT CHECK (available_seats >= 0),
    type VARCHAR(10) CHECK (type IN ('bus', 'plane', 'train')),
    company_name VARCHAR(100) NOT NULL
);

CREATE TABLE Accommodations (
    accommodation_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(20) CHECK (category IN ('hotel', 'hostel', 'apartment')),
    city VARCHAR(100),
    country VARCHAR(100),
    contact_name VARCHAR(100),
    contact_phone VARCHAR(20)
);

CREATE TABLE Trips (
    trip_id SERIAL PRIMARY KEY,
    destination VARCHAR(100) NOT NULL,
    price NUMERIC(10, 2) CHECK (price >= 0),
    available_spots INT CHECK (available_spots >= 0),
    current_bookings INT DEFAULT 0 CHECK (current_bookings >= 0),
    transport_id INT NOT NULL,
    accommodation_id INT NOT NULL,
    FOREIGN KEY (transport_id) REFERENCES Transport(transport_id) ON DELETE CASCADE,
    FOREIGN KEY (accommodation_id) REFERENCES Accommodations(accommodation_id) ON DELETE CASCADE
);

CREATE TABLE Reservations (
    reservation_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    trip_id INT NOT NULL,
    status VARCHAR(10) CHECK (status IN ('pending', 'confirmed', 'canceled')),
    amount NUMERIC(10, 2) CHECK (amount >= 0),
    reservation_date DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id) ON DELETE CASCADE,
    FOREIGN KEY (trip_id) REFERENCES Trips(trip_id) ON DELETE CASCADE
);

CREATE TABLE Payments (
    payment_id SERIAL PRIMARY KEY,
    reservation_id INT NOT NULL,
    payment_method VARCHAR(20) CHECK (payment_method IN ('credit_card', 'debit_card', 'paypal')),
    payment_date DATE DEFAULT CURRENT_DATE,
    amount NUMERIC(10, 2) CHECK (amount >= 0),
    FOREIGN KEY (reservation_id) REFERENCES Reservations(reservation_id) ON DELETE CASCADE
);
