import dotenv from "dotenv";
import mysql from "mysql";

dotenv.config();

const database = process.env.DATABASE_URL || "";
const connection = mysql.createConnection(database);
connection.connect();

export default connection;
