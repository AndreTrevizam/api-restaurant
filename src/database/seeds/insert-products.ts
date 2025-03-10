import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { "name": "Prato executivo", "price": 19.90 },
        { "name": "Feijoada", "price": 22.50 },
        { "name": "Frango grelhado", "price": 18.00 },
        { "name": "Bife acebolado", "price": 25.00 },
        { "name": "Arroz e feijão", "price": 15.00 },
        { "name": "Lasanha de carne", "price": 28.90 },
        { "name": "Salada de atum", "price": 17.80 },
        { "name": "Peixe frito", "price": 23.50 },
        { "name": "Strogonoff de frango", "price": 24.90 },
        { "name": "Pizza individual", "price": 19.90 },
        { "name": "Hambúrguer gourmet", "price": 29.90 },
        { "name": "Sopa de legumes", "price": 12.50 },
        { "name": "Tapioca recheada", "price": 14.00 },
        { "name": "Pasta à carbonara", "price": 21.90 },
        { "name": "Quiche de legumes", "price": 16.50 },
        { "name": "Risoto de camarão", "price": 35.00 },
    ]);
};
