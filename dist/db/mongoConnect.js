"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//Connect to DB
const mongoConnect = async (url) => {
    await mongoose_1.default.connect(url);
    const connection = mongoose_1.default.connection;
    connection.on("connect", () => {
        console.log("Connected to MongoDB successfully ✅");
    });
    connection.on("error", (err) => {
        console.error(`Error connecting to MongoDB: ${err.message} 🙅‍♂️`);
        console.log("\x1b[31mShutting down server...\x1b[0m");
        process.exit(1);
    });
};
exports.default = mongoConnect;
