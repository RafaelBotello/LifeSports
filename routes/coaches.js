/////////////////////////////////////////////
///   api endpoints for managing coaches  //
///////////////////////////////////////////

const router = require("express").Router();
let Coach = require("../models/coach.model");

// get all coaches on record
// GET: /
// ========================================
router.get("/", async (req, res) => {
  try {
    const coach = await Coach.find({});
    res.send(coach);
  } catch (err) {
    console.log(err);
  }
});

// add a new coach
// POST /add
// ========================================

router.post("/add", async ({ body }, res) => {
  try {
    const coach = await Coach.create(body);
    res.json(coach);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
