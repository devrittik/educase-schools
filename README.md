# School Management API

[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin)](https://www.linkedin.com/in/rittik-chakraborty/) 
[![Portfolio](https://img.shields.io/badge/Portfolio-success?logo=vercel)](https://rittikchakraborty.vercel.app/) 
[![GitHub](https://img.shields.io/badge/GitHub-black?logo=github)](https://github.com/devrittik/)

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
- Postman/Fern

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

## Quick Links

[Test API](https://educase-schools-api.docs.buildwithfern.com/) | [Live API](https://educase-schools-api.onrender.com) | [Postman Collection]([https://...](https://www.postman.com/rittikchakraborty24-556596/rittik-chakraborty-s-workspace/documentation/bjsq9fm/educase-schools))

