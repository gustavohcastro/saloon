
exports.up = function(knex) {
    return knex.schema.createTable('worker', function (table){
        table.increments();
        table.string('name').notNullable();
        table.string('whatsapp').notNullable();
        table.string('email').notNullable();
        table.string('status').notNullable();
        table.string('cpf').notNullable();
        table.string('birthday').notNullable();
        table.string('photo').notNullable();
        table.string('saloonid').notNullable();
        table.string('services').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('worker');
};
