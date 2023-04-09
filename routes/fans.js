const express = require("express");
const router = express.Router();

const Fan = require("../model/Fan");

router.get("/all", async (req, res) => {
  try {
    const fans = await Fan.find();
    res.status(200).json(fans);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/count", async (req, res) => {
  try {
    const fans = await Fan.find();
    res.status(200).json({ count: fans.length });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const fan = await Fan.findById(req.params.id);
    res.status(200).json(fan);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.post("/add", async (req, res) => {
  const fan = new Fan({
    name: req.body.name,
    shortMsg: req.body.shortMsg,
  });

  try {
    const savedFan = await fan.save();
    res.status(200).json(savedFan);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const patchedFan = await Fan.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          shortMsg: req.body.shortMsg,
        },
      }
    );
    res.status(200).json(patchedFan);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedFan = await Fan.findOneAndRemove({
      _id: req.params.id,
    });
    res.status(200).json(deletedFan);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
