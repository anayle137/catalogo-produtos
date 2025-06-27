import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable(
    "products",
    (table: Knex.TableBuilder) => {
      table.increments("id").primary().unsigned().unique();
      table.string("nome").notNullable();
      table.float("preco").notNullable();
      table.string("descricao").notNullable();
      table.dateTime("createdAt").defaultTo(knex.fn.now());
      table.dateTime("updatedAt").defaultTo(knex.fn.now());
      table.dateTime("deletedAt").defaultTo(null);
    }
  );
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("products");
}
