module.exports = {
  getAllProjects,
  getProjectById,
  getAllTask,
  addTask
};

const db = require("../db-config");

// Get All Projects
function getAllProjects() {
  return db("projects");
}

// Get Project By ID
function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

// Get Tasks
function getAllTask(id) {
  console.log(id);
  return db("tasks").where({ project_id: id });
}

// Add Task to Project
function addTask(data) {
  return db("tasks").insert(data);
}
