exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { project_name: "project1", completed: 1 },
        { project_name: "project2", completed: 0 },
        { project_name: "project3", completed: 1 }
      ]);
    });
};
