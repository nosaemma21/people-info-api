"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const notFoundMiddleware_1 = __importDefault(require("./middlewares/notFoundMiddleware"));
const mongoConnect_1 = __importDefault(require("./db/mongoConnect"));
const people_routes_1 = __importDefault(require("./routes/people.routes"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const app = (0, express_1.default)();
app.use("/api/people", people_routes_1.default);
app.use(notFoundMiddleware_1.default);
const startUp = () => {
    (0, mongoConnect_1.default)(MONGO_URI);
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT} 📦📦`);
    });
};
startUp();
