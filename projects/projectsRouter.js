const express = require("express");
const router = express.Router();
router.use(express.json());

const projects = require("./projects-model");

// Get All Projects
router.get("/", (req, res) => {
  projects.getAllProjects().then(project => {
    console.log(project);
    project.map(item => {
      if (item.completed == 1) item.completed = true;
      else item.completed = false;
    });
    res.status(200).json(project);
  });
});

// Get Project By ID
router.get("/:id", (req, res) => {
  projects.getProjectById(req.params.id).then(project => {
    if (project.completed == 1) item.completed = true;
    else project.completed = false;
    projects.getAllTask(req.params.id).then(tasks => {
      if (tasks.length > 0) {
        tasks.map(item => {
          if (item.completed == 1) item.completed = true;
          else item.completed = false;
        });
        project.task = tasks;
      }
      res.status(200).json(project);
    });
  });
});

// Add new Project
router.post("/", (req, res) => {
  projects.addProject(req.body).then(project => {
    res.status(200).json(project);
  });
});

// Add Task to Project
router.post("/:id/tasks", (req, res) => {
  projects.addTask(req.body).then(task => {
    res.status(200).json(task);
  });
});

// Add resource for project
router.post("/:id/resources", (req, res) => {
  projects.addResource(req.body).then(resource => {
    projects.assignResource(resource[0], req.params.id).then(resour => {
      res.status(200).json(resour);
    });
  });
});

// Get All Resource from a Project
router.get("/:id/resources", (req, res) => {
  projects.getResource(req.params.id).then(resou => {
    res.status(200).json(resou);
  });
});

module.exports = router;
