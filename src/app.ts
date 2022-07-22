import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import routes from "./views/index.view";

const app: Application = express();

// Third Party Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));

routes(app);

const port = 3005;

app.listen(port, () => {
  console.log("sesrver is listening on port " + port);
});
