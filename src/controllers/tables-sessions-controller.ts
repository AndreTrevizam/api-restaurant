import { NextFunction, Request, Response } from "express"
import { knex } from "@/database/knex"
import { z } from "zod"
import { AppError } from "@/utils/AppError"

class TablesSessionsController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            

            return res.status(201).json()
        } catch (error) {
            next(error)
        }
    }
}

export { TablesSessionsController }