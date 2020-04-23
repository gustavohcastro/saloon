
exports.up = function(knex) {
    return knex.schema.createTable('service', function (table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('cost').notNullable();
        table.string('photo').notNullable();
        table.string('status').notNullable();
        table.string('saloonid').notNullable();
    
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('service');
};
