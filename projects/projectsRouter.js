const express = require("express");
const router = express.Router();
router.use(express.json());

const projects = require("./projects-model");

router.get("/", (req, res) => {
  projects.getAllProjects().then(projects => {
    res.status(200).json(projects);
  });
});

module.exports = router;
