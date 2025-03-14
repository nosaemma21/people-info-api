"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenderOptions = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
var GenderOptions;
(function (GenderOptions) {
    GenderOptions["Male"] = "male";
    GenderOptions["Female"] = "female";
    GenderOptions["Other"] = "other";
})(GenderOptions || (exports.GenderOptions = GenderOptions = {}));
const PersonSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: {
        type: String,
        required: true,
        enum: Object.values(GenderOptions),
    },
    zipCode: { type: String, required: true },
}, {
    timestamps: true,
});
const Person = mongoose_1.default.model("Person", PersonSchema);
exports.default = Person;
