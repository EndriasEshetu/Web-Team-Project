# How It Works

This document explains the high-level flow of the Web-Team-Project and how the main pieces interact.

## Overview

- Client: A React single-page application (Vite) in the `client/` folder that handles UI and talks to the server via REST API.
- Server: A Node/Express backend in the `server/` folder exposing `/api` endpoints and handling authentication, business logic, and persistence.
- Database: MongoDB (configured in `server/config/db.js`) stores users, appointments, records, and prescriptions.

## Typical request flow

1. User interacts with the React UI (booking, viewing dashboard, managing records).
2. The client sends an authenticated request to the Express API (e.g. `POST /api/appointments`).
3. Express route middleware validates the request and forwards it to a controller.
4. Controller performs business logic and calls the corresponding model/service to read or write the database.
5. Controller returns a JSON response; client updates UI accordingly.

## Roles and permissions

- `Admin`: full access to manage doctors, patients, and appointments.
- `Doctor`: access to their appointments, patients, and prescriptions.
- `Patient`: access to personal appointments and medical records.

## Background jobs

- Reminder jobs and cron-style tasks are implemented under `server/jobs` and `trigger/`.

## Where to look for code

- Routes: `server/routes`
- Controllers: `server/controllers`
- Models: `server/models`
- Client pages/components: `client/src/pages` and `client/src/components`

If you want a diagram or deeper walkthrough for a specific feature, request it and I can extend this doc.
