# School Management API

A Node.js + Express.js + MySQL API to add schools and list nearby schools sorted by geographical proximity.

---

## Features

- Add School API
- List nearest schools by distance
- Input validation
- MySQL database integration
- Haversine-based distance calculation
- Demo seed data (All Indian States + UTs)
- Hosted and ready for testing

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- Render
- Aiven
- Postman
- Fern Docs

---

## API Endpoints

### POST `/addSchool`

Adds a new school.

#### Request Body

```json
{
  "name": "ABC School",
  "address": "Kolkata",
  "latitude": 22.57,
  "longitude": 88.36
}
```
[![Try Now](https://img.shields.io/badge/Try%20Now-blue?logo=gnometerminal)](https://educase-schools-api.docs.buildwithfern.com/educase-schools/add-school?explorer=true)

---

### GET /listSchools?latitude=22.57&longitude=88.36
Returns upto 10 schools sorted by nearest distance.
[![Try Now](https://img.shields.io/badge/Try%20Now-blue?logo=gnometerminal)](https://educase-schools-api.docs.buildwithfern.com/educase-schools/list-schools?explorer=true)

---

## Run Locally
```
npm install
npm run dev
```

---

## Environment Variables
```
DB_HOST=cluster.dbhost.com
DB_PORT=yourdbport
DB_USER=yourusername
DB_PASSWORD=yourdbpassword
DB_NAME=databsename
DB_SSL=true
PORT=serverport
```

---

## Quick Links

[![Interactive Docs](https://img.shields.io/badge/Docs-Fern-informational?logo=readme)](https://educase-schools-api.docs.buildwithfern.com/)
[![Live API](https://img.shields.io/badge/API-Live-success?logo=render)](https://educase-schools-api.onrender.com)
[![Postman Collection](https://img.shields.io/badge/Postman-Collection-orange?logo=postman)](https://www.postman.com/rittikchakraborty24-556596/rittik-chakraborty-s-workspace/documentation/bjsq9fm/educase-schools)

---

## Author

Rittik Chakraborty
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?logo=inspire)](https://www.linkedin.com/in/rittik-chakraborty/)
[![Portfolio](https://img.shields.io/badge/Portfolio-success?logo=ghostfolio)](https://rittikchakraborty.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-black?logo=github)](https://github.com/devrittik/)
