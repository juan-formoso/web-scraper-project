"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var mysql_1 = __importDefault(require("mysql"));
dotenv_1.default.config();
var database = process.env.DATABASE_URL || "";
var connection = mysql_1.default.createConnection(database);
connection.connect();
exports.default = connection;
//# sourceMappingURL=connection.js.map