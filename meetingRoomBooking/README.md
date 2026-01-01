## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```terminal
git clone <repository-url>
cd meetingRoomBooking
```

## 🧪 Running Tests
Tests use in-memory MongoDB, so no external DB is required.
```terminal run
 npm test
```
## Expected output:
* PASS booking.validation.test.js
* PASS booking.overlap.test.js

## 📌 API Endpoints [https://backend-meetingroombooking.onrender.com/]
## Rooms
* POST /rooms – Create a room
* GET /rooms – List rooms

# Bookings
POST /bookings – Create booking
GET /bookings – List bookings
POST /bookings/:id/cancel – Cancel booking

# Reports
GET /reports/room-utilization?from=YYYY-MM-DD&to=YYYY-MM-DD

```
Tests include:

* Booking validation rules
* Overlapping booking checks
* Cancellation grace period
* Room utilization calculation
```
```
#### Create Room
POST /rooms
Body:
```json
{
  "name": "Conference Room A",
  "capacity": 10,
  "floor": 2,
  "amenities": ["Projector", "Whiteboard"]
}
```
---

#### List Rooms

```
GET /rooms
```

Optional Query Params:

* `minCapacity`
* `amenity`

---

### 📅 Bookings

#### Create Booking

```
POST /bookings
```

Headers:

```
Idempotency-Key: unique-key-123
```

Body:

```json
{
  "roomId": "<ROOM_ID>",
  "title": "Team Meeting",
  "organizerEmail": "user@example.com",
  "startTime": "2025-01-06T10:00:00",
  "endTime": "2025-01-06T12:00:00"
}
```

Business Rules:

* `startTime < endTime`
* Duration: 15 minutes to 4 hours
* Allowed only Mon–Fri, 08:00–20:00
* No overlapping confirmed bookings
* Duplicate requests with same Idempotency-Key return same booking

---

#### List Bookings

```
GET /bookings
```

Query Params:

* `roomId`
* `from`
* `to`
* `limit`
* `offset`

---

#### Cancel Booking

```
POST /bookings/{id}/cancel
```

Rules:

* Can be cancelled only up to 1 hour before startTime
* Cancelling an already cancelled booking returns same booking
* Cancelled bookings do not block new bookings

---

### 📊 Reports

#### Room Utilization Report

```
GET /reports/room-utilization?from=2025-01-01&to=2025-01-10
```

Response:

```json
[
  {
    "roomId": "65fa...",
    "roomName": "Conference Room A",
    "totalBookingHours": 12,
    "utilizationPercent": 0.25
  }
]
```

Utilization Formula:

```
total booked hours / total business hours
```

Business hours:

* Monday to Friday
* 08:00 AM to 08:00 PM (12 hours per day)

---

## ❌ Error Handling

All errors are returned in JSON format with proper HTTP status codes.

Example:

```json
{
  "error": "ValidationError",
  "message": "startTime must be before endTime"
}
```



# Meeting Room Booking Service

This project is a backend service for managing meeting rooms and bookings.
It is implemented as part of an interview assignment to demonstrate clean API design,
business rule validation, idempotency handling and reporting.

The service is built using **Node.js, Express, and MongoDB** and follows a layered
architecture for better readability and maintainability.

---

## 📌 Features Overview

* Create and list meeting rooms
* Create bookings with strict business rules
* Prevent overlapping bookings for the same room
* Support idempotent booking creation using `Idempotency-Key`
* Cancel bookings with a 1-hour grace period
* Generate room utilization reports
* Clear validation and error handling
* Beginner-readable but industry-standard structure

---

## 🛠 Tech Stack

* **Backend**: Node.js, Express
* **Database**: MongoDB (Mongoose)
* **Runtime**: Node.js (ES Modules)
* **Dev Tools**: Nodemon
* **Testing**: Jest

---

## 📂 Project Structure

```
meetingroombooking/
│
├── index.js
├── src/
│   ├── app.js
│   │
│   ├── routes/
│   │   ├── room.routes.js
│   │   ├── booking.routes.js
│   │   └── report.routes.js
│   │
│   ├── controllers/
│   │   ├── room.controller.js
│   │   ├── booking.controller.js
│   │   └── report.controller.js
│   │
│   ├── services/
│   │   ├── room.service.js
│   │   ├── booking.service.js
│   │   └── report.service.js
│   │
│   ├── models/
│   │   ├── room.model.js
│   │   ├── booking.model.js
│   │   └── idempotency.model.js
│   │
│   └── utils/
│       ├── time.util.js
│       └── error.util.js
│
├── tests/
│   ├── booking.test.js
│   ├── cancellation.test.js
│   └── report.test.js
│
├── DESIGN.md
├── package.json
├── .env
└── README.md
```
---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone <your-github-repo-url>
cd meetingroombooking
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file in the project root:

```env
MONGO_URL=mongodb://localhost:27017/meetingroombooking
PORT=5000
```

---

### 4️⃣ Start the Server

Development mode:

```
npm run dev
```

Production mode:

```
npm start
```

Server will run at:

```
http://localhost:5000
```

---

Status Codes:

* 400 – Validation errors
* 404 – Resource not found
* 409 – Booking conflict

---

## 📘 Design Documentation

Refer to **DESIGN.md** for:

* Data model explanation
* Overlap prevention strategy
* Idempotency implementation
* Concurrency handling
* Utilization calculation assumptions


---

## 👤 Author

**Stantilin**
MERN Stack Developer

---
