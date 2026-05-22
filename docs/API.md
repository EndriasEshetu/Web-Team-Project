# API Reference

This file outlines key backend endpoints. All endpoints are prefixed with `/api`.

- `POST /api/auth/login` — authenticate and receive a token.
- `GET /api/appointments` — list appointments (auth required).
- `POST /api/patients` — create a patient record.

The server routes live in the `server/routes` folder and controllers in `server/controllers`.
