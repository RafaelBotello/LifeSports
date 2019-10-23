/////////////////////////////////////////////
//// API endpoints for managing exercises //
///////////////////////////////////////////

const router = require("express").Router();
let Exercise = require("../models/exercise.model");

// get all exercise logs on record
// GET: /
// ========================================
router.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.find({});
    res.send(exercises);
  } catch (err) {
    console.log(err);
  }
});

// Then, Catch
// router.get("/", (req, res) => {
//   Exercise.find({})
//     .then(data => res.send(data))
//     .catch(err => console.log(err));
// });

// POST: /add
// ========================================

//Async
router.post("/add", async ({ body }, res) => {
  try {
    const exercises = await Exercise.create(body);
    res.json(exercises);
  } catch (err) {
    console.log(err);
  }
});

// Then, Catch Method
// router.post("/add", ({ body }, res) => {
//   Exercise.create(body)
//     .then(dbUser => res.json(dbUser))
//     .catch(err => res.json(err));
// });

// GET: /:id
// Async
router.get("/:id", async (req, res) => {
  try {
    const exercises = await Exercise.findById(req.params.id);
    console.log(exercises);
    res.send(exercises);
  } catch (err) {
    console.log(err);
  }
});

// Then, Catch
// router.get("/:id", (req, res) => {
//   Exercise.findById(req.params.id)
//     .then(data => res.send(data))
//     .catch(err => console.log(err));
// });

// delete a specfic exercise log
// DELETE: /:id
// ========================================

router.delete("/:id", async (req, res) => {
  try {
    const exercises = await Exercise.findByIdAndDelete(req.params.id);
    res.send(exercises);
  } catch (err) {
    console.log(err);
  }
});

// retrieve a specific exercise log and update it
// with information sent by client on req body
// POST: /update/:id
// ========================================

router.post("/update/:id", async (req, res) => {
  const exercise = await Exercise.updateOne(
    { _id: req.params.id },
    {
      $set: {
        username: req.body.username,
        description: req.body.description,
        duration: req.body.duration,
        date: Date.now()
      }
    },
    { new: true }
  );
  res.send(exercise);
});

module.exports = router;
