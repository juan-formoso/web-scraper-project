import model from "./model";

const getAllCharacters = async () => {
  const characters = await model.getAllCharacters();
  return characters;
};

const getCharacterById = async (id: number) => {
  const character = await model.getCharacterById(id);
  return character;
};

export default { getAllCharacters, getCharacterById };
