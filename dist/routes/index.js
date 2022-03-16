"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var character_1 = __importDefault(require("../middlewares/character"));
var router = (0, express_1.Router)();
router.get("/characters", character_1.default.getAllCharacters);
router.get("/characters/:id", character_1.default.getCharacterById);
exports.default = router;
//# sourceMappingURL=index.js.map