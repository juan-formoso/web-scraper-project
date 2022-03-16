import { Router } from "express";
import controller from "../middlewares/controller";

const router = Router();

router.get("/characters", controller.getAllCharacters);
router.get("/characters/:id", controller.getCharacterById);

export default router;
