import express, { Request, Response } from "express";
import mysql from "mysql";

const app = express();

const connectionString = process.env.DATABASE_URL || "";
const connection = mysql.createConnection(connectionString);
connection.connect();

app.get("/api/characters", (req: Request, res: Response) => {
  const query = "SELECT * FROM Characters";
  connection.query(query, (err, rows) => {
    if (err) throw err;
    const retVal = {
      data: rows,
      message: rows.length === 0 ? "No characters found" : null,
    };
    return res.send(retVal);
  });
});

app.get("/api/characters:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const query = `SELECT * FROM Characters WHERE id = ${id}`;
  connection.query(query, (err, rows) => {
    if (err) throw err;
    const retVal = {
      data: rows.length > 0 ? rows[0] : null,
      message: rows.length === 0 ? "No Record Found" : "",
    };
    return res.send(retVal);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
