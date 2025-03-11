import { Request, Response, NextFunction } from "express";
import { knex } from "@/database/knex"
import { z } from "zod"
import { AppError } from "@/utils/AppError";

class TablesController {
    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const tables = await knex<TableRepository>("tables")
                .select()
                .orderBy("table_number")

            return res.json(tables)
        } catch (error) {
            next(error)
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const bodySchema = z.object({
                table_number: z.number().gt(0)
            })

            const { table_number } = bodySchema.parse(req.body)

            await knex<TableRepository>("tables").insert({ table_number })

            return res.status(201).json()

        } catch (error) {
            next(error)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id =
                z.string()
                    .transform((value) => Number(value))
                    .refine((value) => !isNaN(value))
                    .parse(req.params.id)

            const bodySchema = z.object({
                table_number: z.number().gt(0)
            })

            const { table_number } = bodySchema.parse(req.body)

            const table = await knex<TableRepository>("tables")
                .select()
                .where({ id })
                .first()

            if (!table) {
                throw new AppError("Table not found")
            }

            await knex<TableRepository>("tables")
                .update({ table_number, updated_at: knex.fn.now() })
                .where({ id })

            return res.json()
        } catch (error) {
            next(error)
        }

    }

    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const id = z.string()
                .transform((value) => Number(value))
                .refine((value) => !isNaN(value))
                .parse(req.params.id)

            const table = await knex<TableRepository>("tables")
                .select()
                .where({ id })
                .first()

            if (!table) {
                throw new AppError("ID not found")
            }

            await knex<TableRepository>("tables").delete().where({ id })

            return res.json()

        } catch (error) {
            next(error)
        }
    }
}

export { TablesController }