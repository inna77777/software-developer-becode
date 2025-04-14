# 4. Entity/Relationship (E/R) ERD: Exercise

There are several tools to model ERD diagrams. For this course, we have used the following two resources:  
- [Lucid.app](https://lucid.app)  
- [mermaid.js](https://mermaid.js.org/syntax/entityRelationshipDiagram.html)  

But for this exercise, use **Lucid.app**

## 4.1 Rules

Create a repo and add the exercise with the schema. We'll later add the database schema (SQL) to it.

## 4.2 Exercise

A travel agency wants to develop a system to efficiently manage its reservations. This system should allow customers to book trips, make payments, and access information about the transportation, accommodations, and tour guides associated with each trip.

Each trip organized by the agency has a destination, a price, a limited number of available spots, and a number of current bookings. When a customer wants to join a trip, they must make a reservation, which can have the status: pending, confirmed, or canceled. Each reservation is associated with an amount and a reservation date.

Payments for trips are also managed by the system. A customer can pay for their reservation using a specific payment method. The payment information must be recorded to allow clear tracking of the transactions made.

The trips offered by the agency include various means of transportation such as buses, planes, or trains, operated by different transportation companies. Each transport has a name, a number of available seats, and a specific type. The agency also manages the travelers' accommodations, with establishments of different categories located in various cities and countries.  
> **Note:** One accommodation per trip & one contact per accommodation.

The goal of this exercise is to model and implement a relational database schema to manage these different aspects of the travel reservation system.

**Model the corresponding E/R diagram.**

![gif](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTB4cGdnemRjNWVhNTlwM3h0dHZtODJpeG12bzMzNmU0bGE5bWRkZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UWP27oYIiSyL1u9izU/giphy.gif)
