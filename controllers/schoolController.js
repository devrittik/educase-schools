import { pool } from "../db.js";

export const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    if (!/^[a-zA-Z\s.'-]{2,100}$/.test(name)) {
      return res.status(400).json({
        message: "Invalid Name : (alphabets & sp chars like . , ' , - allowed with length between (2-100)"
      });
    }

    const lat = Number(latitude);
    const lng = Number(longitude);

    if (
      latitude === "" || longitude === "" ||
      isNaN(lat) || isNaN(lng) ||
      lat < -90 || lat > 90 ||
      lng < -180 || lng > 180
    ) {
      return res.status(400).json({
        error: "Invalid latitude or longitude"
      });
    }

    const [result] = await pool.query(
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
      [name, address, latitude, longitude]
    );

    res.status(201).json({
      success: true,
      "message": "School added successfully",
      data: {
        id: result.insertId,
        name,
        address,
        latitude,
        longitude
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listSchools = async (req, res) => {
  try {

    const { latitude, longitude } = req.query;

    if (latitude === "" || longitude === "" ||
        latitude == null || longitude == null) {
      return res.status(400).json({ error: "Latitude and longitude required" });
    }

    const userLat = Number(latitude);
    const userLng = Number(longitude);

    if (isNaN(userLat) || isNaN(userLng ||
      userLat < -90 || userLat > 90 ||
      userLng < -180 || userLng > 180
    )) {
      return res.status(400).json({ error: "Invalid coordinates" });
    }

    // Haversine formula is used to measure distance (KM), limiting upto 10 rows
    const [schools] = await pool.query(
    `SELECT *,
      (
        2 * 6371 * ASIN( 
          SQRT(
            POWER(SIN((RADIANS(latitude) - RADIANS(?)) / 2), 2) +
            COS(RADIANS(?)) *
            COS(RADIANS(latitude)) *
            POWER(SIN((RADIANS(longitude) - RADIANS(?)) / 2), 2)
          )
        )
      ) AS distance
     FROM schools
     ORDER BY distance
     LIMIT 10`,
    [userLat, userLat, userLng]
  );

    res.status(200).json({ success: true, data: schools, length: schools.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};