import { Request, Response } from "express";
import service from "./service";

const getAllCharacters = async (_req: Request, res: Response) => {
  try {
    const characters = await service.getAllCharacters();
    res.status(200).json(characters);
  } catch (error) {
    return error;
  }
};

const getCharacterById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const character = await service.getCharacterById(Number(id));
    res.status(200).json(character);
  } catch (error) {
    return error;
  }
};

export default { getAllCharacters, getCharacterById };
