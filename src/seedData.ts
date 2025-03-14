import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import Person from "./models/person.model"; // Ensure correct path
import { GenderOptions } from "./models/person.model"; // Adjust if needed

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI as string;
mongoose.connect(MONGO_URI).then(() => console.log("Connected to MongoDB"));

// Function to generate random people
const generatePeople = async () => {
  const people = [];

  for (let i = 0; i < 100; i++) {
    const gender = faker.helpers.arrayElement(Object.values(GenderOptions));

    const person = {
      name: faker.person.fullName({
        sex: gender.toLowerCase() as "male" | "female",
      }),
      age: faker.number.int({ min: 18, max: 80 }),
      dateOfBirth: faker.date.birthdate({ min: 18, max: 80, mode: "age" }),
      gender: gender,
      zipCode: faker.location.zipCode(),
    };

    people.push(person);
  }

  await Person.insertMany(people);
  console.log("✅ 100 random people added!");
  mongoose.connection.close();
};

// Run the script

const addHundredPersons = () => {
  generatePeople().catch(console.error);
};

addHundredPersons();
