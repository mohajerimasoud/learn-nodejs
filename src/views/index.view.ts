import { Express, Application } from "express";
import UsersRouter from "./users.view";

function routes(app: Application) {
  app.use("/api/users", UsersRouter);
}

export default routes;
