import { Request, Response } from "express";
import connection from "./connection";

const getAllCharacters = async (_req: Request, res: Response) => {
  const query = "SELECT * FROM Characters";
  connection.query(query, (err, rows) => {
    if (err) throw err;
    const result = {
      data: rows,
      message: "",
    };
    if (rows.length === 0) {
      result.message = "No records found";
    }
    res.send(rows);
  });
};

const getCharacterById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const query = `SELECT * FROM Characters WHERE ID = "${id}" LIMIT 1`;
  connection.query(query, (err, rows) => {
    if (err) throw err;
    const result = {
      data: rows.length > 0 ? rows[0] : null,
      message: rows.length === 0 ? "No Record Found" : "",
    };
    res.send(result);
  });
};

export default { getAllCharacters, getCharacterById };
