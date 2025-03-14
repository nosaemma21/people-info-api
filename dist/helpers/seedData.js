"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHundredPersons = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const faker_1 = require("@faker-js/faker");
const person_model_1 = __importDefault(require("../models/person.model")); // Ensure correct path
const person_model_2 = require("../models/person.model"); // Adjust if needed
// Connect to MongoDB
const MONGO_URI = "your_mongodb_connection_string_here";
mongoose_1.default.connect(MONGO_URI).then(() => console.log("Connected to MongoDB"));
// Function to generate random people
const generatePeople = async () => {
    const people = [];
    for (let i = 0; i < 100; i++) {
        const gender = faker_1.faker.helpers.arrayElement(Object.values(person_model_2.GenderOptions));
        const person = {
            name: faker_1.faker.person.fullName({
                sex: gender.toLowerCase(),
            }),
            age: faker_1.faker.number.int({ min: 18, max: 80 }),
            dateOfBirth: faker_1.faker.date.birthdate({ min: 18, max: 80, mode: "age" }),
            gender: gender,
            zipCode: faker_1.faker.location.zipCode(),
        };
        people.push(person);
    }
    await person_model_1.default.insertMany(people);
    console.log("✅ 100 random people added!");
    mongoose_1.default.connection.close();
};
// Run the script
const addHundredPersons = () => {
    generatePeople().catch(console.error);
};
exports.addHundredPersons = addHundredPersons;
