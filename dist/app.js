"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
app.use(index_1.default);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT));
});
//# sourceMappingURL=app.js.map