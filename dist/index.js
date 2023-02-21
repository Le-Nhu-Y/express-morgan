"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var PORT = 3000;
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)("common"));
app.get('/', function (req, res) {
    res.json({
        message: "Hello every body. I love you!",
    });
});
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:3000");
});
//# sourceMappingURL=index.js.map