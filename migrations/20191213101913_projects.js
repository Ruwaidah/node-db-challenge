exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.text("project_name", 255).notNullable();
      tbl.text("description", 255);
      tbl.boolean("completed").notNullable();
    })

    .createTable("tasks", tbl => {
      tbl.increments();
      tbl
        .string("task_name", 255)
        .unique()
        .notNullable();
      tbl.text("description", 255).notNullable();
      tbl.text("note", 255);
      tbl.boolean("completed").notNullable();
      tbl
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects");
    })

    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .string("resource_name", 255)
        .unique()
        .notNullable();
      tbl.text("description", 255).notNullable();
    })

    .createTable("project_resource", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects");
      tbl
        .integer("resource_id")
        .notNullable()
        .references("id")
        .inTable("resources");
    });
};

exports.down = function(knex) {};
