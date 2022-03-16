import express, { Request, Response } from "express";
import mysql from "mysql";

const app = express();

const connectionString = process.env.DATABASE_URL || "";
const connection = mysql.createConnection(connectionString);
connection.connect();

app.get("/api/characters", (req: Request, res: Response) => {
  res.send("It's alive!");
});

app.get("/api/characters:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.send(id + "Id is alive!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
