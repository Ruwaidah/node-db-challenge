const express = require("express");
const router = express.Router();
router.use(express.json());

const projects = require("./projects-model");

// Get All Projects
router.get("/", (req, res) => {
  projects.getAllProjects().then(projects => {
    res.status(200).json(projects);
  });
});

// Get Project By ID
router.get("/:id", (req, res) => {
  projects.getProjectById(req.params.id).then(project => {
    projects.getAllTask(req.params.id).then(tasks => {
      if (tasks.length > 0) project.task = tasks;
      res.status(200).json(project);
    });
  });
});

// Add Task to Project
router.post("/:id/tasks", (req, res) => {
  projects.addTask(req.body).then(task => {
    res.status(200).json(task);
  });
});
module.exports = router;
