import connection from "./connection";

const getAllCharacters = async () => {
  const query = "SELECT * FROM Characters";
  const result = await connection.query(query);
  return result;
};

const getCharacterById = async (id: number) => {
  const query = `SELECT * FROM Characters WHERE ID = ${id}`;
  const result = await connection.query(query);
  return result;
};

export default { getAllCharacters, getCharacterById };
