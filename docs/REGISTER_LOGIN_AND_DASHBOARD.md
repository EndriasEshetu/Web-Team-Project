# Register, Login & Dashboard — Detailed Guide

This guide explains how to register and log in (UI and API) and how to use each dashboard (Admin, Doctor, Patient).

## Register (UI)

- Open the Register page (`/register`).
- Required fields: **Full Name**, **Email**, **Password**, **Confirm Password**, **Account Type** (Patient, Doctor, Administrator).
- Check **I agree** and submit. The client calls `POST /api/auth/register` and on success stores your user object and JWT, then redirects to the app root (`/`).

Client behavior notes:

- Passwords must match and the UI enforces `minLength=6`.
- The selected **Account Type** is sent as the `role` field.

API example (register):

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","password":"secret","role":"patient"}'
```

## Login (UI)

- Open the Login page (`/login`).
- Enter **Email** and **Password**. Optionally check **Remember me**.
- On success the client stores the user and token and navigates to `/`.

Remember-me behavior:

- If **Remember me** is checked the token and user are persisted in `localStorage`; if not, they are kept in `sessionStorage` (the app's `useAuthStore` handles this). This controls whether your session survives closing the browser.

API example (login):

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"jane@example.com","password":"secret"}'
```

Using the token with API calls:

- The client automatically attaches `Authorization: Bearer <token>` to requests via an Axios interceptor. For external scripts include the same header.

## Logout

- The app clears stored credentials when you log out (the `logout()` method on the auth store removes both `localStorage` and `sessionStorage` entries). If there's a UI logout button, use that; otherwise you can clear storage in the browser devtools.

## Protected routes & roles

- The app uses role-based route guards (`AdminRoute`, `DoctorRoute`, `PatientRoute`). If your account role doesn't match the route, you'll be redirected to `/`.

## Dashboards — How to use them

### Admin Dashboard

- Overview: top-level analytics (total patients, active doctors, total appointments).
- Appointment Status: quick counts for Pending / Confirmed / Completed / Cancelled.
- Recent registrations and recent appointments blocks for quick review.
- Navigation: cards link to the management pages:
  - `/admin/patients` — manage patient records
  - `/admin/doctors` — review and manage doctor records
  - `/admin/appointments` — view and change appointment state

Suggested admin tasks:

- Review pending appointments and confirm or cancel as needed.
- Verify newly registered doctors and enable/disable accounts.

### Doctor Dashboard

- Overview: stats for today's patients, confirmed appointments, completed visits, and unique patients handled.
- Today's Schedule: a time-ordered list of today's appointments with quick status badges.
- Upcoming: short list of next confirmed consultations.
- Actions: follow links to full appointments list to view details, update status, add notes, or issue prescriptions (where implemented).

### Patient Dashboard (My Appointments / My Records)

- My Appointments: split into Upcoming and Past/Cancelled.
- Upcoming appointments show doctor, date/time, notes, and actions (Reschedule, Cancel) when the appointment is `Pending` or `Confirmed`.
- Rescheduling opens the app's reschedule modal; Cancel sends a cancel request to the API.
- Booking: use the booking flows (Book Appointment / Booking Calendar) to create new appointments — the UI guides you through selecting a doctor, date/time, and providing notes.

## Troubleshooting & tips

- If login fails, check the server logs for authentication errors and ensure the API base URL is correct (client uses `VITE_API_URL` or defaults to `http://localhost:5000/api`).
- To test API calls manually, include the `Authorization: Bearer <token>` header returned from login.
- For automated testing or CI, register an account via the API and store the returned token in an environment variable.

If you'd like, I can add screenshots, example flows for booking/rescheduling with API calls, or a small sequence diagram — tell me which you'd prefer.
