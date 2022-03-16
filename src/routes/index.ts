import { Router } from "express";
import middlewares from "../middlewares/character";

const router = Router();

router.get("/characters", middlewares.getAllCharacters);
router.get("/characters/:id", middlewares.getCharacterById);

export default router;
