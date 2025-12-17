# Meeting Room Booking Service – Design

## Data Model

- Room: name, capacity, floor, amenities
- Booking: roomId, title, organizerEmail, startTime, endTime, status
- Idempotency: key, organizerEmail, stored response

## Overlap Prevention

Bookings are queried by roomId and time range.
Overlapping confirmed bookings are rejected with HTTP 409.

## Error Handling

Consistent JSON error responses with proper HTTP codes:
400 – validation errors
404 – room not found
409 – overlapping booking

## Idempotency

Idempotency-Key header is stored with organizerEmail.
Duplicate requests return the same stored booking.
Unique index ensures safety across restarts.

## Concurrency

MongoDB unique indexes and atomic writes prevent race conditions.

## Utilization Calculation

Utilization = booked hours / total business hours
Business hours: Mon–Fri, 08:00–20:00.
