import { Router } from "express";
import { productsRoutes } from "./products-routes"
import { tablesRouter } from "./tables-routes";
import { tablesSessionsRoutes } from "./tables-sessions-routes";
import { ordersRoutes } from "./orders-routes";

const routes = Router()
routes.use("/products", productsRoutes)
routes.use("/tables", tablesRouter)
routes.use("/tables_sessions", tablesSessionsRoutes)
routes.use("/orders", ordersRoutes)

export { routes }