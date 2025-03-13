import { NextFunction, Request, Response } from "express"
import { knex } from "@/database/knex"
import { z } from "zod"
import { AppError } from "@/utils/AppError"

class OrdersController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        table_session_id: z.number(),
        product_id: z.number(),
        quantity: z.number()
      })

      const { product_id, quantity, table_session_id } = bodySchema.parse(req.body)

      const session = await knex<TableSessionRepository>("tables_sessions")
        .where({ id: table_session_id })
        .first()

      if (!session) {
        throw new AppError("Session table not found")
      }

      if (session.closed_at) {
        throw new AppError("This table is closed")
      }

      const product = await knex<ProductRepository>("products")
        .where({ id: product_id })
        .first()

      if (!product) {
        throw new AppError("Product not found")
      }

      await knex<OrderRepository>("orders").insert({
        product_id,
        table_session_id,
        quantity,
        price: product.price
      })

      return res.status(201).json()

    } catch (error) {
      next(error)
    }
  }

  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const { table_session_id } = req.params

      const order = await knex("orders")
        .select(
          "orders.id", 
          "orders.table_session_id", 
          "orders.product_id", 
          "products.name",
          "orders.price",
          "orders.quantity",
          knex.raw("(orders.price * orders.quantity) AS total"),
          "orders.created_at",
          "orders.updated_at"
        )
        .join("products", "products.id", "orders.product_id")
        .where({ table_session_id })
        .orderBy("orders.created_at")


      return res.json(order)
    } catch (error) {
      next(error)
    }
  }
}

export { OrdersController }