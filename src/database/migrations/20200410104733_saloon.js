
exports.up = function(knex) {
    return knex.schema.createTable('saloon', function (table){
        table.increments();
        table.string('name').notNullable();
        table.string('photo').notNullable();
        table.string('description').notNullable();
        table.string('address').notNullable();
        table.string('number').notNullable();
        table.string('type').notNullable();
        table.string('whatsapp').notNullable();
        table.string('password').notNullable();
        table.string('cep').notNullable();
        table.string('email').notNullable();
        table.string('status').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('saloon');
};
