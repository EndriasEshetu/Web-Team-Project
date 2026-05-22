# Architecture Overview

High-level architecture:

- Client: React + Vite in the `client/` folder.
- Server: Node/Express in the `server/` folder with RESTful routes.
- Database: configured via `server/config/db.js` (MongoDB expected).

The project separates responsibilities into `controllers`, `models`, `routes`, and `services` on the server side.
