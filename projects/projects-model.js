module.exports = {
  getAllProjects
};

const db = require("../db-config");

function getAllProjects() {
  return db("projects");
}
