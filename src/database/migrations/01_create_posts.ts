const knex = require('knex');

export async function up(knex){
    return knex.schema.createTable('posts', table=> {
        table.increments('id').primary();
        table.string('mensahgem').notNullable();
        table.string('avaliacao').notNullable();
        table.string('email_user').notNullable();
        table.string('id_user').notNullable();
    })
}

export async function down(knex){
    return knex.schema.dropTable('posts');
}