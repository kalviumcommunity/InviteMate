const express = require("express");
const Download = require("../models/downloadModel");
const headingData = require("../models/completeData");
const fs = require("fs");
const { error } = require("console");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Get all downloads" });
});

router.get("/all", async (req, res) => {
  const abc = await headingData.find();
  res.send(abc);
  console.log(abc);
});

//get single download
router.get("/:id", (req, res) => {
  res.json({ msg: "Get single download" });
});

//POST a download
router.post("/", async (req, res) => {
  const { username, templateID, template } = req.body;

  try {
    const download = await Download.create({ username, templateID, template });
    if (download) {
      res.status(200).json(download);
    } else {
      req.status(500).json({ error: "No download" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/all", async (req, res) => {
  const { id, title, subHeading } = req.body;

  try {
    const all = await headingData.create({ id, title, subHeading });
    if (all) {
      res.status(200).json(all);
    } else {
      req.status(500).json({ error: "No download" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE a download
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a single download" });
});

//Update a download
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a single download" });
});

module.exports = router;
