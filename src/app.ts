import express, { Application, Request, Response } from "express";
const app: Application = express();

app.get("/test", (req: Request, res: Response) => {
  console.log("Hi Express 😍");
  res.status(200).json({ message: "Hi Test End Point" });
});

app.listen(3000);
