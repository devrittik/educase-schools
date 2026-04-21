import express from "express";
import { addSchool, listSchools} from "../controllers/schoolController.js";

const router = express.Router();

router.post("/addSchool", addSchool);
router.get("/listSchools", listSchools);
router.get("/", (req,res) => {
    res.status(200)
    .json({
        status : "ok", 
        guide : 
        [
            "use /addSchool to add new school", 
            "use /listSchools to get list of nearby schools",
            "use /status to check server health"
        ]
    });
});

export default router;