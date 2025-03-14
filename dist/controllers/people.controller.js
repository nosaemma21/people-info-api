"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPeople = void 0;
const person_model_1 = __importDefault(require("../models/person.model"));
const asyncCatcher_1 = __importDefault(require("../helpers/asyncCatcher"));
exports.getPeople = (0, asyncCatcher_1.default)(async (req, res, next) => {
    const people = await person_model_1.default.find().select("-_id");
    res.status(200).json({ success: true, people });
});
