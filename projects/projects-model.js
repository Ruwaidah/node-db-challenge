module.exports = {
  getAllProjects,
  getProjectById,
  addProject,
  getAllTask,
  addTask,
  addResource,
  assignResource,
  getResource,
  getAllResource
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

// Add project
function addProject(data) {
  return db("projects").insert(data);
}

// Get Tasks
function getAllTask(id) {
  return db("tasks").where({ project_id: id });
}

// Add Task to Project
function addTask(data) {
  return db("tasks").insert(data);
}

// Add resource for project
function addResource(data) {
  return db("resources").insert(data);
}

// assign resource to project
function assignResource(resourceId, projectId) {
  return db("project_resource").insert({
    project_id: projectId,
    resource_id: resourceId
  });
}

// Get Resource for Project
function getResource(ids) {
  console.log(ids);
  return db("project_resource")
    .select("project_Name", "resource_name")
    .join("projects", "project_id", "projects.id")
    .join("resources", "resource_id", "resources.id")
    .where({ project_id: ids });
}

// Get All Resource
function getAllResource() {
  return db("resources");
}
