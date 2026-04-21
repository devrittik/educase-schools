# School Management API

Node.js + Express.js + MySQL API to add schools and list schools sorted by proximity.

## Features
- Add School API
- List Schools by distance
- Input validation
- MySQL database
- Haversine formula
- Demo seed data (India states + UT)

## Tech Stack
- Node.js
- Express.js
- MySQL
- mysql2
- Render/Aiven

## API Endpoints

### POST /addSchool
Add a new school.

Request:
{
  "name": "ABC School",
  "address": "Kolkata",
  "latitude": 22.57,
  "longitude": 88.36
}

### GET /listSchools?latitude=22.57&longitude=88.36
Returns upto 10 schools sorted by nearest distance.

## Run Locally
npm install
npm run dev

## Environment Variables
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=

## Live API
https://educase-schools-api.onrender.com