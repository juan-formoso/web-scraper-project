import { Router } from "express";
import helpers from "../middlewares/character";

const router = Router();

router.get("/characters", helpers.getAllCharacters);
router.get("/characters/:id", helpers.getCharacterById);

export default router;
